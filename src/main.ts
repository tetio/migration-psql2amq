import { createConnection, Repository } from "typeorm";
import { Country } from "./entity/country.entity";
import { publish, Q_CUSTOMERS } from './queue.utils';
import { City } from "./entity/city.entity";

// connection settings are in the "ormconfig.json" file
createConnection()
    .then(async connection => {

        const repository: Repository<Country> = connection.getRepository(Country)
        const res = await repository.createQueryBuilder('country')
            .where("country.country_id = 103")
            //.leftJoinAndMapMany("country.cities", "city", "city", "country.country_id = city.country_id")
            .leftJoinAndMapMany("country.cities", "city", "city", "country.country_id = city.country_id")
            .getOne()
        //res.map((customer) => publish(Q_CUSTOMERS, JSON.stringify(customer)))
        console.log('#country: ' + JSON.stringify(res))
        connection.close()

    })
    .catch(error => console.log("Error: ", error));