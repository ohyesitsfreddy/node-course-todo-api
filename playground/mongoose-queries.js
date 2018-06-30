const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5b365d28ad43ce47d3bb1010';

// validation of the id
if (!ObjectID.isValid(id)){
    console.log('ID not valid');
}
// Todo.find({
//     _id: id 
// }).then((todos) => {
//     console.log('Todos', todos);
// });


// Todo.findOne({
//     _id: id 
// }).then((todo) => {
//     console.log('Todo', todo);
// });


//Only argument is the ID:
Todo.findById(id).then((todo) => {
    if (!todo){
        return console.log('ID not found!');
    }
    console.log('Todo By ID', todo);
}).catch((e) => console.log(e));



User.findById(id).then((user) => {
    if(!user){
        return console.log('ID not found');
    }
    console.log('User By ID', user);
});