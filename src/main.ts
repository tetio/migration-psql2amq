import { createConnection, Repository } from "typeorm";
import { Customer } from "./entity/customer.entity";
import { publish, Q_CUSTOMERS } from './queue.utils';

// connection settings are in the "ormconfig.json" file
createConnection()
    .then(async connection => {

        const customerRepository: Repository<Customer> = connection.getRepository(Customer)
        const res = await customerRepository.createQueryBuilder('customer')
            .leftJoinAndSelect("customer.address", "address")
            .leftJoinAndSelect("address.city", "city")
            .leftJoinAndSelect("city.country", "country")
            .getMany()

        res.map((customer) => publish(Q_CUSTOMERS, JSON.stringify(customer)))
        console.log('#customers: ' + res.length)
        connection.close()

    })
    .catch(error => console.log("Error: ", error));