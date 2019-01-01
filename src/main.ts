import { createConnection, Repository } from "typeorm";
import { FFCC_CABECERA } from "./entity/FFCCCabecera.entity";
import { publish, Q_FFCC } from './queue.utils';

// connection settings are in the "ormconfig.json" file
createConnection()
    .then(async connection => {

        const repository = connection.getRepository(FFCC_CABECERA)
        const res = await repository.createQueryBuilder('FFCC_CABECERA')
            //.where("FFCC_CABECERA.ID_EXP = 25117")
            .leftJoinAndMapMany("FFCC_CABECERA.equipos", 'FFCC_EQUIPOS', 'FFCC_EQUIPOS', "ffcc_cabecera.id_exp = ffcc_equipos.id_exp")
            .getMany()
            //.getQuery()

        res.map((ffcc) => publish(Q_FFCC, JSON.stringify(ffcc)))
        // console.log('#FFCCCabecera: \n' + JSON.stringify(res))
        connection.close()

    })
    .catch(error => console.log("Error: ", error));