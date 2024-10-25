import React, { useState } from 'react';

const EditTodoForm = ({ task, handleEditSubmit, toggleEdit }) => {
  const [updatedTask, setUpdatedTask] = useState(task.task);

  const onSubmit = (e) => {
    e.preventDefault();
    handleEditSubmit(task.id, updatedTask);
    // toggleEdit(task.id); // Close edit mode after saving
  };

  return (
    <form onSubmit={onSubmit} className='To-do-From'>
      <input
        className='todo-input'
        type='text'
        value={updatedTask}
        onChange={(e) => setUpdatedTask(e.target.value)}
        placeholder='Edit task...'
      />
      <div className="btn">
      <button type='submit'>Save</button>
      <button type='button' onClick={() => toggleEdit(task.id)}>
        Cancel
      </button>
      </div>
    </form>
  );
};

export default EditTodoForm;
