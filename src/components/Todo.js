import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({todo, toggleComplete, deleteTodo,edit}) => {
  return (
    <div  style={{ textDecoration: todo.isCompleted ? 'line-through': 'none'}}>
        <p className='Tood' onClick = {() => toggleComplete(todo.id)}>{todo.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => edit(todo.id)}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)}></FontAwesomeIcon>
        </div>
    </div>
  )
}
