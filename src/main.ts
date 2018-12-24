import {createConnection, Repository} from "typeorm";
// import {Post} from "./entity/Post";
// import {Category} from "./entity/Category";
import { Customer } from "./entity/customer.entity";
import { publish, Q_CUSTOMERS } from './queue.utils';

// connection settings are in the "ormconfig.json" file
createConnection().then(async connection => {

    // const category1 = new Category();
    // category1.name = "TypeScript";
    // await connection.manager.save(category1);

    // const category2 = new Category();
    // category2.name = "Programming";
    // await connection.manager.save(category2);

    // const post = new Post();
    // post.title = "Control flow based type analysis";
    // post.text = `TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.`;
    // post.categories = [category1, category2];

    // await connection.manager.save(post);

    // console.log("Post has been saved: ", post);

    const customerRepository: Repository<Customer> = connection.getRepository(Customer)
    const res = await customerRepository.createQueryBuilder('customer')
            .leftJoinAndSelect("customer.address", "address")
            .leftJoinAndSelect("address.city", "city")
            .leftJoinAndSelect("city.country", "country")
            .getMany()

    res.map((customer) => publish(Q_CUSTOMERS, JSON.stringify(customer)))
    console.log('#rentals: ' + res.length )


}).catch(error => console.log("Error: ", error));