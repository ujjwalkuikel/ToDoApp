import React from 'react'
import TodoItem from './TodoItem';

export const Todos=(props)=> {
  return (
    <div className="container">

      <h3 className='text-center'>ToDo List</h3>
      {props.todo===0? "Not available for display":
        props.todo.map((todo)=>{
         return (
          <>
         <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/></>
        )})
       }
      
    


    </div>
  )
}
