import React, { useState } from 'react'

export const TodoForm = (props) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(value);
        props.addTodo(value);
        setValue("");
    }
  return (
    <form className='TodoFrom' onSubmit={handleSubmit}>
        <input type='text' className='input-tood' value={value} placeholder='What is your task?' onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Enter</button>
    </form>
  )
}
