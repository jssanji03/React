import React from 'react'

function todoForm(props) {
  const { todoInput, setTodoInput, todos, setTodos } = props
  return (
    <>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        //處理按下Enter
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value) {
            //建立一個新的todo
            const newItem = {
              id: +new Date(),
              text: e.target.value,
              completesd: false,
              edited: false,
            }
            const newTodos = [newItem, ...todos]
            setTodos(newTodos)
            setTodoInput('')
          }
        }}
      />
    </>
  )
}

// 輸出元件(函式)

export default todoForm
