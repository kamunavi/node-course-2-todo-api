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


   // //deleteMany
   // db.collection('Todos').deleteMany({text: 'Each lunch'}).then((result) => {
   //   console.log(result);
   // })
   //
   // //deleteOne
   // db.collection('Todos').deleteOne({text: 'Each lunch'}).then((result) => {
   //   console.log(result);
   // })


   // //findOneAndDelete
   // db.collection('Todos').findOneAndDelete({completed:'False'}).then((result) => {
   //   console.log(result);
   // });


   db.collection('Users').deleteMany({name:'Andrew'});


   //
   //client.close();
});
