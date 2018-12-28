import { createConnection, Repository } from "typeorm";
import { FFCC_CABECERA } from "./entity/FFCCCabecera.entity";
import { publish, Q_CUSTOMERS } from './queue.utils';
import { FFCC_EQUIPOS } from "./entity/FFCCEquipo.entity";

// connection settings are in the "ormconfig.json" file
createConnection()
    .then(async connection => {

        const repository = connection.getRepository(FFCC_CABECERA)
        const res = await repository.createQueryBuilder('FFCC_CABECERA')
            .leftJoinAndSelect("FFCC_CABECERA.equipos", 'FFCC_EQUIPOS')
    //.leftJoinAndMapMany("FFCC_CABECERA.equipos", "cabecera", "e")
            // .leftJoinAndSelect("address.city", "city")
            // .leftJoinAndSelect("city.country", "country")
            .where("FFCC_CABECERA.ID_EXP=:id")
            .setParameter("id", 26377)
            .getMany()
            //.getOne()

        //res.map((customer) => publish(Q_CUSTOMERS, JSON.stringify(customer)))
        //console.log('#customers: ' + res.length)
        console.log('#FFCCCabecera: \n' + JSON.stringify(res))
        connection.close()

    })
    .catch(error => console.log("Error: ", error));