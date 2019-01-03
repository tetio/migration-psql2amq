import { createConnection, Repository, Connection } from "typeorm";
import { FFCC_CABECERA } from "./entity/FFCCCabecera.entity";
import { publish, Q_FFCC } from './queue.utils';
import { FFCC_EQUIPOS } from "./entity/FFCCEquipo.entity";
import { FFCC } from "./entity/ffcc.entity";



let dbConnOracle: Connection = null
let dbConnPostgres: Connection = null

let repositoryA: Repository<FFCC_CABECERA> = null
let repositoryB: Repository<FFCC_EQUIPOS> = null
let repository01: Repository<FFCC> = null


/* DELETE ME
    test values
 .where("ID_EXP = 6945344")

*/

async function init(): Promise<void> {
    try {
        dbConnOracle = await createConnection('oracle-prod')
        dbConnPostgres = await createConnection('postgres-local')
        repositoryA = dbConnOracle.getRepository(FFCC_CABECERA)
        repositoryB = dbConnOracle.getRepository(FFCC_EQUIPOS)
        repository01 = dbConnPostgres.getRepository(FFCC)
    } catch (error) {
        console.log("Error Init: ", error)
    }
}

async function closeDbConns(): Promise<void> {
    try {
        await dbConnOracle.close()
        await dbConnPostgres.close()
    } catch (error) {
        console.log("Error closeDbConns: ", error)
    }
}


function slimDown(jsonFat: string): string {
    return jsonFat.replace(/"\b.*: null,/g, '').replace(/"\b.*: null/g, '')
}


async function persist(data: FFCC_CABECERA): Promise<void> {
    try {
        const ffcc = new FFCC()
        ffcc.data = JSON.parse(slimDown(JSON.stringify(data)))
        await repository01.save(ffcc)
    } catch (error) {
        console.log("Error persist: ", error)
    }
}



async function importData(low: number, upper: number): Promise<void> {
    try {
        const cabeceras = await repositoryA.createQueryBuilder('a')
            //.where("ID_EXP = 6945344")
            .where(`ID_EXP >= ${low} and ID_EXP < ${upper}`)
            .getMany()
        const ccc = cabeceras.map(async cabecera => {
            const equipos = await repositoryB.createQueryBuilder('b')
                .where("ID_EXP = " + cabecera.idExp)
                .getMany()
            cabecera.equipos = equipos
            //return cabecera
            persist(cabecera)
            //publish(Q_FFCC, slimDown(JSON.stringify(cabecera)))

        })
        //        ccc.map(c => publish(Q_FFCC, slimDown(JSON.stringify(c))))
    } catch (error) {
        console.log("Error importData: ", error)
    }
}


async function run() {
    try {
        await init()
        await importData(0, 11000000)
        await importData(11000000, 12500000)
        await importData(12500000, 14000000)
        await importData(14000000, 15000000)
        await importData(15000000, 16000000)
        await importData(16000000, 17000000)
        await importData(17000000, 18000000)
        await importData(18000000, 19000000)
        await importData(19000000, 21000000)
        await importData(21000000, 23000000)
        await importData(23000000, 100000000)
        // await importData(16000000, 19000000)
        // await importData(19000000, 26000000)
        // await closeDbConns()
    } catch (error) {
        console.log("Error run: ", error)
    }
}


run()