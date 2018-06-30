const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Remove ALL: Todo.remove({})

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Remove One and Remove{}

Todo.findOneAndRemove({_id : ''}).then((todo) => {});

// Remove findByID and Remove

Todo.findByIdAndRemove('5b3750e36687141989b95e32').then ((todo) => {
    console.log(todo);
});