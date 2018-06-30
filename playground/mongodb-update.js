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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b364e15c05690dcc6192abe')},{
    //         $set: {completed: true}
    //     }, {
    //         returnOriginal: false
    //     }   
    // ).then((result) => { console.log(result)});


    db.collection('Users').findOneAndUpdate({
        _id: 123}, {
            $set: {name: 'Matthew'},
            $inc: {age: 1}
        }, {
            returnOriginal: false
        }).then((result) => {console.log(result)});
    //client.close();
});