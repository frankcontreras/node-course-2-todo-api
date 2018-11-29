const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c0038282ff2060e92fbe15d';
var userId = '5bff1999b91ef0ab8c9a8a93';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({_id: id}).then((todo) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({_id: id}).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found.');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User Id not found.');
  }
  console.log('User by ID', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
