// 導入其它的模組
import React, { useState, useEffect } from 'react'
// import todoAdd from './components/todo/todoAdd'
import TodoList from './todo/TodoList'
import TodoForm from './todo/TodoForm'

function TodoApp(props) {
  const [todoInput, setTodoInput] = useState('')
  // 將每個待辨事項改為物件值
  // { id, text: string, completed: bool, edited:bool }
  const [todos, setTodos] = useState([
    { id: 1, text: '買iphone', completed: true, edited: false },
    { id: 2, text: '學好react', completed: false, edited: false },
  ])

  // 利用id值尋找對應的item的索引值，然後改變edited值
  const handleEditedToggle = (id) => {
    // 先複製一個新的todos陣列
    const newTodos = [...todos]

    // 利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)

    // 如果尋找到的索引值不是-1時，代表有找到索引值
    if (todoItemIndex !== -1) {
      // 布林值 true變false，false變true
      newTodos[todoItemIndex].edited = !newTodos[todoItemIndex].edited

      // 設定回原本的todos
      setTodos(newTodos)
    }
  }

  // 利用id值尋找對應的item的索引值，然後改變text值
  const handleEditedSave = (id, newText) => {
    // 先複製一個新的todos陣列
    const newTodos = [...todos]

    // 利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)

    // 如果尋找到的索引值不是-1時，代表有找到索引值
    if (todoItemIndex !== -1) {
      // text 更改為新的 newText
      newTodos[todoItemIndex].text = newText

      // 設定回原本的todos
      setTodos(newTodos)

      // 切換回原本的狀態
      handleEditedToggle(id)
    }
  }

  //要更改todo 只能用setTodo，但是不能只更改其中的值
  //所以先複製一份更改完成再放回陣列
  // 利用id值尋找對應的item的索引值，然後改變completed值
  const handleCompleted = (id) => {
    // 先複製一個新的todos陣列
    const newTodos = [...todos]
    //findindex特性 // 利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)

    // 如果尋找到的索引值不是-1時，代表有找到索引值
    if (todoItemIndex !== -1) {
      // 布林值 true變false，false變true
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed
      // 設定回原本的todos
      setTodos(newTodos)
    }
  }
  const handleDelete = (id) => {
    //建立一個新的陣列，其中"不包含"要被移除的項目(用filter)
    const newTodos = todos.filter((item, index) => item.id !== id)

    // 設定回原本的todos
    setTodos(newTodos)
  }

  return (
    <>
      <h2 className="mt-5">代辦事項</h2>
      <TodoForm
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        todos={todos}
        setTodos={setTodos}
      ></TodoForm>
      <hr />
      <button>全部</button>
      <button>已完成</button>
      <button>未完成</button>
      <hr />
      <TodoList
        todos={todos}
        handleEditedToggle={handleEditedToggle}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        handleEditedSave={handleEditedSave}
      />
    </>
  )
}
// 輸出元件(函式)
export default TodoApp
