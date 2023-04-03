import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(value);
        editTodo(value, task.id);
        setValue("");
    }
  return (
    <form className='TodoFrom' onSubmit={handleSubmit}>
        <input type='text' className='input-tood' value={value} placeholder='Update task?' onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update</button>
    </form>
  )
}
