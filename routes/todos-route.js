const todosService = require("../services/todos-service");

function addRoutes(App) {
  App.get("/api/get-todos", (req, res) => {
    todosService
      .getTodos()
      .then((todos) => res.json(todos))
      .catch((err) => res.status(500).send("couldnt get todos"));
  });
  App.post(`/api/add-todo`, (req, res) => {
    const { text } = req.body;
    console.log("rout text", text);
    todosService
      .addTodo(text)
      .then((todo) => res.json(todo))
      .catch((err) => {
        res.status(500).send("couldnt add todo");
      });
  });
  App.post(`/api/update-todo`, (req, res) => {
    const todo = req.body;
    todosService
      .updateTodo(todo)
      .then((response) => {
        return res.json();
      })
      .catch((err) => {
        res.status(500).send("couldnt  update todo");
      });
  });
  App.post(`/api/delete-todo`, (req, res) => {
    const todo = req.body;
    todosService
      .deleteTodo(todo)
      .then((response) => res.json())
      .catch((err) => {
        res.status(500).send("couldnt  delete todo");
      });
  });
}
module.exports = addRoutes;
