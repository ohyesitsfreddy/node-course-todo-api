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


    // deleteMany

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });


    // deleteOne

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });


    // findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    // db.collection('Users').deleteMany({name: 'Frederik Nebas'}).then((result) => {
    //     console.log(result);
    // });

     db.collection('Users').findOneAndDelete({_id: new ObjectID('5b3644954c69e638e1d1230f')}).then((result) => {
        console.log(result);
    });

    //client.close();
});