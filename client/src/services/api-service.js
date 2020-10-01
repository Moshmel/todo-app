import axios from "axios";
const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/api"
    : "/api";

    function getTodos(){
        return axios.get(`${URL}/get-todos`)
      } 
      function addTodo(text){
        return axios.post(`${URL}/add-todo`,{text});
      } 
      function updateTodo(todo){
        return axios.post(`${URL}/update-todo`,todo);
      } 
      function deleteTodo(todo){
        return axios.post(`${URL}/delete-todo`,todo);
      } 

      export default {
        getTodos,addTodo,updateTodo,deleteTodo
      };
      