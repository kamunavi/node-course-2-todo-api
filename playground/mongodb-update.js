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

   db.collection('Todos').findOneAndUpdate({
     _id: new ObjectID('5b3023c7d7be81a6c0b33f50')
   }, {
     $set: {
       completed: true
     }
   }, {
     returnOriginal:false
   }).then((result) => {
     console.log(result);
   })

   //client.close();
   });

    db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('5b3023c7d7be81a6c0b33f50')
     }, {
      $set: {
       name: 'NavinK'
     },
     $inc:{
       age: +1
     }
    }, {
  returnOriginal:false
   }).then((result) => {
      console.log(result);
  });

//client.close();
});



//5b3023c7d7be81a6c0b33f50
