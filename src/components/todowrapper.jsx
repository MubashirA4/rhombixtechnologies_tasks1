import React, { useState } from 'react'
import Todoform from './todoform'
import Todo from './todo';
import { v4 as uuidv4 } from 'uuid'
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); 
  }

  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
      )
    );
  };
  return (
    <div className='todowrapper'>
      <h1>Task Manager</h1>
        <Todoform addTodo={addTodo} />
      <div className='form'>
        {todos.map((todo) => (
          <Todo 
          task={todo}
           key={todo.id}
            deleteTodo={deleteTodo} 
            toggleEdit={toggleEdit}  
            editTodo={editTodo}/>
        ))}
      </div>
    </div>
  )
}

export default TodoWrapper