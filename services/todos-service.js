const mongoService = require("./mongo-service");
const ObjectId = require("mongodb").ObjectId;


 function getTodos() {
    return mongoService
    .connect()
    .then(db => db.collection("todos").find({}).toArray())
}
function updateTodo(todo){
  const todoId = new ObjectId(todo._id);
    return mongoService
      .connect()
      .then(db =>
        db.collection("todos").updateOne({ "_id": todoId }, { $set: {isDone:todo.isDone,text:todo.text} })
      );
}

function deleteTodo(todo){
    const todoId = new ObjectId(todo._id);
    console.log('delete id is',todoId);
    return mongoService
    .connect()
    .then(db =>
      db.collection("todos").remove(  {"text" :todo.text},true)
    );

}
function addTodo(text){
    const todo={text,isDone:false };
    console.log('service ',todo)
    return mongoService
      .connect()
      .then(db => db.collection("todos").insertOne(todo))
      .then(res => {
        todo._id = res.insertedId;
        return todo;
      });

}
module.exports = {
    getTodos,addTodo,deleteTodo,updateTodo
}