import * as Stomp from '@stomp/stompjs'
import { createConnection, Repository, Connection } from "typeorm";
import { Q_FFCC, subscribe } from './queue.utils'
import { FFCC } from './entity/ffcc.entity'



const connection = createConnection('postgres-local')
    .then(async connection => {
        const demoSubscription = subscribe(Q_FFCC, (message: Stomp.Message) => {
            const data = JSON.parse(message.body)
            message.ack(message.headers);
            console.log("Subscription notified " + new Date() + ". A new document has been inserted with id: " + data.idExp)
            persist(connection, data)
        })
    })
    .catch(error => console.log("Error: ", error));

console.log("Subscription Document Ready")

// export const demoSubscription = subscribe(Q_FFCC, (message: Stomp.Message) => {
//     const data = JSON.parse(message.body)
//     message.ack(message.headers);
//     console.log("Subscription notified " + new Date() + ". A new document has been inserted with id: " + data.idExp)
//     //   publish(DOC_PROCESS_QUEUE, JSON.stringify(message.body))

//     // TODO persist data into db
//     persist(data)
// })


function persist(connection: Connection, data: any) {
    const repository = connection.getRepository(FFCC)
    const ffcc = new FFCC()
    ffcc.data = data
    const res = repository.save(ffcc)
}