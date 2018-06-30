//const MongoClient = require ('mongodb').MongoClient;
// ES6 Object destructuring:
const {MongoClient, ObjectID} = require ('mongodb');

// let obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        // Return damit ersteinmal der Fehler geworfen wird wenn er auftritt!
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB server');

    // Database reference: 
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // Insert new doc into Users (name, age, location):

    // db.collection('Users').insertOne({
    //     name: 'Frederik Nebas',
    //     age: 28,
    //     location: 'Munich'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});