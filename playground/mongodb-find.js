//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//
// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if (err) {
   return  console.log('Unable to connect to MongoDB Server');
 }
   console.log('Connected to MongoDB server');
   const db = client.db("TodoApp");

   // db.collection ('Todos').find({
   //   _id : new ObjectID('5b2f2042eaf0e98af8da8f6f')
   // }).toArray().then((docs) => {
   //   console.log('Todos');
   //   console.log(JSON.stringify(docs,undefined, 2));
   // }, (err) => {
   //   console.log('Unable to fetch todos',err);
   // });


   // db.collection ('Todos').find().count().then((count) => {
   // console.log(`Todos Count: ${count}`)
   // }, (err) => {
   //   console.log('Unable to fetch todos',err);
   // });


   db.collection ('Users').find({name : 'Navin'}).toArray().then((docs) => {
   console.log(JSON.stringify(docs,undefined,2));
   }, (err) => {
     console.log('Unable to fetch Users',err);
   });


   db.collection ('Users').find({name : 'Navin'}).count().then((count) => {
   console.log(`Users Count: ${count}`)
   }, (err) => {
     console.log('Unable to fetch todos',err);
   });

   //client.close();
});
