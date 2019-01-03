/*

db.createUser(
  {
    user: "alarmUser",
    pwd: "EqpBLuiA_88",
    roles: [ "readWrite", "dbAdmin"]
  }
)


db.createUser(
  {
    user: "alarmUser",
    pwd: "EqpBLuiA_22",
    roles: [ "readWrite", "dbAdmin"]
  }
)
*/

let config: any = {
    'local': {
      // '10.120.1.129', 8161, 'admin', 'admin'
      'AMQ': {
        'WS': 'ws://localhost:61614/stomp',
        //'WS': 'tcp://10.120.1.128:61613?protocols=STOMP;connectionTtl=20000',
        //'WS': 'ws://10.120.1.129:61614',
        'URL': 'localhost',
        'PORT': 61613
      },
      'MONGO_URI': 'mongodb://localhost:27017/document-state-machine',
      //'MONGO_URI': 'mongodb://alarmUser:EqpBLuiA_22@10.103.1.6:27017/alarm-event-DESA',
      'MONGO_OPTIONS': { 'useMongoClient': true }
    },
    'development': {
      'MONGO_URI': 'mongodb://alarmUser:EqpBLuiA_22@10.103.1.6:27017/state-machine-DESA',
      'MONGO_OPTIONS': { 'useMongoClient': true, 'safe': true }
    },
    'production': {
      'MONGO_URI': 'mongodb://alarmUser:EqpBLuiA_88@10.103.1.6:27017/state-machine-PROD',
      'MONGO_OPTIONS': { 'useMongoClient': true, 'safe': true }
    }
  };
  
  export { config }
  