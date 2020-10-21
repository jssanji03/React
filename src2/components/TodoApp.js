import React, { useState, useEffect } from 'react'

function TodoApp() {
  const [todoInput, setTodoInput] = useState('')
  // const [todos, setTodos] = useState(['買iphone 12 pro max', '學好react'])

  return (
    <>
      <h1 className="mt-5">範例：待辨事項</h1>

      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <hr />
    </>
  )
}
export default TodoApp
