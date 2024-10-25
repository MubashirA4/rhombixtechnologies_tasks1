import React from 'react'
import EditTodoForm from './EditTodoform';
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

const Todo = ({ task, deleteTodo, toggleEdit, editTodo }) => {
  return (
    <div className='todo'>
      {task.isEditing ? (
        <EditTodoForm
          task={task}
          handleEditSubmit={editTodo}
          toggleEdit={toggleEdit}
        />
      ) : (
        <ul>
          <li>{task.task}</li>
          <ol>
            <li>
              <FaPenToSquare className='icon' onClick={() => toggleEdit(task.id)} />
            </li>
            <li>
              <FaTrash className='icon' onClick={() => deleteTodo(task.id)} />
            </li>
          </ol>
        </ul>
      )}
    </div>
  )
}

export default Todo