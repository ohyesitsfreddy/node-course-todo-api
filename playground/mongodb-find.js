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

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b364807c05690dcc61928ea')
    // }).toArray().then( (docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log('Unable to fetch todos', err);
    // } );

    // db.collection('Todos').find().count().then( (count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) =>{
    //     console.log('Unable to fetch todos', err);
    // } );

    db.collection('Users').find({name: 'Mike'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Error', err);;
    })

    //client.close();
});