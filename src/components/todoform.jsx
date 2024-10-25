import React, { useState } from 'react'


const Todoform = ({addTodo}) => {
  const [value, setValue] =useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value)
    setValue("")
  }
  return (
    <form className='TodoFrom' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' placeholder='what is the task today?' value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button type='submit' className='todo-btn' >Add </button>
    </form>
  )
}

export default Todoform