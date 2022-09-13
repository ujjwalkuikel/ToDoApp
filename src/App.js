import './App.css';
import Header from './MyComponent/Header';
import {Todos} from './MyComponent/Todos';
import {Footer} from './MyComponent/Footer';
import {AddTodo} from './MyComponent/AddTodo';
import React, { useState,useEffect}from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null) {
    initTodo=[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));  
  }

  const onDelete=(todo)=>{
    console.log("Ondelete: ",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addTodo=(title,desc)=>{
    let sno;
    if(todos.length===0){
      sno=1;
    } 
    else{
      sno=todos[todos.length-1].sno +1;
    }
    
    const myTodo={
      sno: sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo); 

   }
  const[todos,setTodos] = useState(initTodo) 
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  return (
    
    <>
    <Header title="ToDo app by Ujjwal" searchBar={true}/>
    <AddTodo addTodo={addTodo} />
    <Todos todo={todos} onDelete={onDelete} />
    <Footer/>
    </>
  );
}

export default App;
