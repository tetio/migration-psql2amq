import { createConnection, Repository } from "typeorm";
import { FFCC_CABECERA } from "./entity/FFCCCabecera.entity";
import { publish, Q_CUSTOMERS } from './queue.utils';
import { FFCC_EQUIPOS } from "./entity/FFCCEquipo.entity";

// connection settings are in the "ormconfig.json" file
createConnection()
    .then(async connection => {

        const repository = connection.getRepository(FFCC_CABECERA)
        const res = await repository.createQueryBuilder('FFCC_CABECERA')
            .where("FFCC_CABECERA.ID_EXP = 25117")
            .leftJoinAndMapMany("FFCC_CABECERA.equipos", 'FFCC_EQUIPOS', 'FFCC_EQUIPOS', "ffcc_cabecera.id_exp = ffcc_equipos.id_exp")
            .getOne()
            //.getQuery()
        console.log('#FFCCCabecera: \n' + JSON.stringify(res))
        //console.log('#FFCCCabecera: \n' +res)
        connection.close()

    })
    .catch(error => console.log("Error: ", error));