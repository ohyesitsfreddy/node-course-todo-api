let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');
const {ObjectID} = require('mongodb');


let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos}); //ES6 better way to use {todos}! you get an object back
    }, (e) => {
        res.status(400).send(e);
    })
})

// GET /todos/12345

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    // validation of the id
    // Valid id using is Valid
        // 404 if the user is not found - send back empty send
    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if(!todo){
           return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => { res.status(400).send();});
    // find by id 
        // success
            // if todo - send it back
            // if no todo - send back 404 with empty body
        // error
            // 400 req was not valid empty body
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});