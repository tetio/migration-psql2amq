import { createConnection, Repository } from "typeorm";
import { FFCC_CABECERA } from "./entity/FFCCCabecera.entity";
import { publish, Q_FFCC } from './queue.utils';
import { FFCC_EQUIPOS } from "./entity/FFCCEquipo.entity";

//connection settings are in the "ormconfig.json" file
// createConnection('oracle-prod')
//     .then(async connection => {

//         const repositoryA = connection.getRepository(FFCC_CABECERA)
//         const repositoryB = connection.getRepository(FFCC_EQUIPOS)
//         const res = await repositoryA.createQueryBuilder('a')
//             .where("ID_EXP = 6945344")
//             //.leftJoinAndMapMany("FFCC_CABECERA.equipos", 'FFCC_EQUIPOS', 'FFCC_EQUIPOS', 'FFCC_CABECERA.ID_EXP = ffcc_equipos.id_exp')
//             .getMany().then(cabeceras => {
//                 cabeceras.map(cabecera => {
//                     repositoryB.createQueryBuilder('b')
//                         .where("ID_EXP = " + cabecera.idExp)
//                         .getMany().then(equipos => {
//                             cabecera.equipos = equipos
//                             publish(Q_FFCC, JSON.stringify(cabecera))                
//                         })
//                 })
//             })

//         //connection.close()

//     })
//     .catch(error => console.log("Error: ", error));

createConnection('oracle-prod')
    .then(async connection => {

        const repository = connection.getRepository(FFCC_CABECERA)
        const res = await repository.createQueryBuilder('FFCC_CABECERA')
            .where("FFCC_CABECERA.ID_EXP = 6945344")
            .leftJoinAndMapMany("FFCC_CABECERA.equipos", 'FFCC_EQUIPOS', 'FFCC_EQUIPOS', "ffcc_cabecera.id_exp = ffcc_equipos.id_exp")
            .getMany()
            //.getQuery()

        res.map((ffcc) => publish(Q_FFCC, JSON.stringify(ffcc)))
        // console.log('#FFCCCabecera: \n' + JSON.stringify(res))
        connection.close()

    })
    .catch(error => console.log("Error: ", error));
