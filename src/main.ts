import { createConnection, Repository } from "typeorm";
import { FFCC_CABECERA } from "./entity/FFCCCabecera.entity";
import { publish, Q_CUSTOMERS } from './queue.utils';

// connection settings are in the "ormconfig.json" file
createConnection()
    .then(async connection => {

        const repository = connection.getRepository(FFCC_CABECERA)
        const res = await repository.createQueryBuilder('FFCCCabecera')
            // .leftJoinAndSelect("customer.address", "address")
            // .leftJoinAndSelect("address.city", "city")
            // .leftJoinAndSelect("city.country", "country")
            // .getMany()
            .getOne()

        //res.map((customer) => publish(Q_CUSTOMERS, JSON.stringify(customer)))
        //console.log('#customers: ' + res.length)
        console.log('#FFCCCabecera: ' + res.idExp)
        connection.close()

    })
    .catch(error => console.log("Error: ", error));