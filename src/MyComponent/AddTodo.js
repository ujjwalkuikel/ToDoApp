import React, { useState } from 'react'

export const AddTodo = (props) => {
    const[title,setTitle] = useState("");
    const[desc,setdesc] = useState("");

   const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
        alert("Title or Desc cannot be blank")
    }
    else{
        props.addTodo(title,desc);
        setTitle("");
        setdesc("");
    }
    
    }
  return (
    <div className='container'>
    <h4 className='text-center'>Add new Todo</h4>
<form onSubmit={submit}>
    <div className="form-group">
      <label htmlFor="title">Todo Title:</label>
      <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder="Enter title" name="title" />
    </div>
    <div className="form-group">
      <label htmlFor="desc">Todo Description:</label>
      <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc" placeholder="Enter description" name="desc" />
    </div>
    <button type="submit" className="btn btn-dark">Add</button>
  </form>
    </div>
 )
}
