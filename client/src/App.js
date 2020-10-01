import React, { useState,useEffect } from "react";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";
import apiService from './services/api-service';
import Fade from 'react-reveal/Fade';


import "./App.scss";

function App() {
  const [todos,setTodos]=useState("");

  //on mount - fetch todos
  useEffect(() => {
    async function fetchTodos() {
      let response = await apiService.getTodos();
      setTodos(response.data);
    }

    fetchTodos()
  }, [])

//app logic 
  const addTodo = async (text) => {
    try{
      const res=await apiService.addTodo(text);
      const newTodo=res.data;
      const newTodos = [...todos, newTodo];
      console.log('new todos',newTodos);
      setTodos(newTodos);
    }
    catch(e){
      console.log('faild to add todo')
    }
  };

  const ToggleIsDone =async (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !todos[index].isDone;
    setTodos(newTodos);
    try{
      const res= await apiService.updateTodo( newTodos[index]);
    }
    catch(e){
      console.log('faild to update todo');
    }
  
  
  };

  const deleteTodo = async (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    try{
     const res = await apiService.deleteTodo( todos[index]);
     console.log('res delete',res)
    }
    catch(e){
      console.log(e,'faild to delete todo');
    }
  };

  return (
    <div className="app">
      <div className="wrapper">
      <Fade bottom>
      <div className="list-container">
 
      <div className="todo-list">
      <div className="top-section">
        <h2> My Tasks</h2>
      </div>
      <div className="bottom-section">
        <div className="todos-container">

        {todos && todos.map((todo, index) => (
          <Todo
          key={index}
          index={index}
          todo={todo}
          ToggleIsDone={ToggleIsDone}
          deleteTodo={deleteTodo}
          />
          ))}
          </div>
        <TodoForm addTodo={addTodo} />
          </div>
      </div>
      </div>
      </Fade>
      <div className="text-container">

<h1>Let's get </h1>
<h1> things done!</h1>
  </div>
      </div>

    </div>
  );
}

export default App;
