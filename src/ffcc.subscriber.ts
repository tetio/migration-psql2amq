import * as Stomp from '@stomp/stompjs'
import { createConnection, Repository } from "typeorm";
import { Q_FFCC, subscribe } from './queue.utils'
import {FFCC} from './entity/ffcc.entity'


console.log("Subscription Document Ready")

export const demoSubscription = subscribe(DOC_STATUS_QUEUE, (message: Stomp.Message) => {
  const data = JSON.parse(message.body)
  message.ack(message.headers);
  console.log("Subscription notified " + new Date() + ". A document has been nodified![" + newLocal.smKey + "]")
//   publish(DOC_PROCESS_QUEUE, JSON.stringify(message.body))

  // TODO persist data into db
  persist(data)
})



function persist(data:any) {
    createConnection()
      .then(async connection => {
          const repository = connection.getRepository(FFCC)
          const ffcc = new FFCC()
          ffcc.data = data
          const res = await repository.save(ffcc)
          connection.close()
      })
      .catch(error => console.log("Error: ", error));
  }