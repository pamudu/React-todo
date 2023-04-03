import React, { useState } from 'react'
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();
export const TodoWrapper = () => {
    const[todos, setTodos] = useState([]);
    const addTodo = (todo) =>{
        setTodos([...todos, {id:uuidv4(), task: todo, isCompleted: false, isEditing: false}])
        console.log(todos);
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,isCompleted : !todo.isCompleted} : todo))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id ))
    }

    const edit = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,isEditing : !todo.isEditing } : todo))
    }

    const editTodo = (task,id) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo,task,isEditing : !todo.isEditing } : todo))
    }

  return (
    <div classWrapper="TodoWrapper">
        <TodoForm addTodo = {addTodo}/>
        {todos.map(todo => (todo.isEditing ? (<EditTodoForm editTodo = {editTodo} task = {todo}/>) : (<Todo key={todo.id} todo = {todo} toggleComplete={toggleComplete} 
                                                                        deleteTodo = {deleteTodo} 
                                                                        edit={edit}/> ))

        )}
    
    </div>
  )
}
