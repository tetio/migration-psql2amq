import * as Stomp from '@stomp/stompjs';
import { config } from "./config"


export let Q_RENTALS = "/queue/RENTALS"
export let Q_CUSTOMERS = "/queue/CUSTOMERS"
export let Q_FFCC = "/queue/FFCC"

const amqWS = config[process.env.NODE_ENV || 'local']['AMQ']["WS"]

export function publish(queue: string, message?: string) {
  let client: Stomp.Client = Stomp.client(amqWS);
  let headers = { ack: 'client' };
  client.connect(headers,  (f) => {
    client.send(queue, headers, message)
    client.disconnect()
  })
}


export function subscribe(queue: string, callback: (message: Stomp.Message) => any): Stomp.StompSubscription {
  let client: Stomp.Client = Stomp.client(amqWS);  
  let headers = { ack: 'client' };
  return client.connect(headers, (f) => {
    return client.subscribe(queue, callback, headers)
  })
}




