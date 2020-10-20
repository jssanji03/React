// 導入其它的模組
import React, { useState, useEffect } from 'react'
import TodoInput from './todo/TodoInput'
import TodoList from './todo/TodoList'
import { Button } from 'react-bootstrap'

function TodoApp(props) {
  const [todoInput, setTodoInput] = useState('')
  // 0=all, 1= (view completed = true), 2=(view completed =false)
  const [viewFilter, setViewFilter] = useState(0)
  const { todos, setTodos } = props
  // const [todos, setTodos] = useState([
  //   //{id,text:string,completed:bool,edited:bool}
  //   // { id: 1, text: 'Buy milk', completed: true, edited: false },
  //   // { id: 2, text: 'Save Money', completed: false, edited: false },
  //   // { id: 3, text: '買ps5', completed: false, edited: false },
  //   // { id: 4, text: '買牛奶', completed: true, edited: false },
  // ])

  const handleCompleted = (id) => {
    const newTodos = [...todos]
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)
    if (todoItemIndex !== -1) {
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed
      setTodos(newTodos)
    }
  }
  const handleEditedToggle = (id) => {
    const newTodos = [...todos]
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)
    if (todoItemIndex !== -1) {
      newTodos[todoItemIndex].edited = !newTodos[todoItemIndex].edited
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
      setTodos(newText)
      // 切換回原本的狀態
      handleEditedToggle(id)
    }
  }
  const handleDelete = (id) => {
    const newTodosFinal = todos.filter((item, index) => item.id !== id)

    setTodos(newTodosFinal)
  }

  return (
    <div className="container">
      <h2 className="mt-5 text-center">Todo List</h2>
      <TodoInput
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        todos={todos}
        setTodos={setTodos}
      />
      <hr />
      <div className="btnClass2">
        <Button
          className="btn mr-2"
          variant="secondary"
          size="sm"
          onClick={() => setViewFilter(0)}
        >
          所有
        </Button>
        <Button
          className="btn mr-2"
          variant="secondary"
          size="sm"
          onClick={() => setViewFilter(1)}
        >
          已完成
        </Button>
        <Button
          className="btn mr-2"
          variant="secondary"
          size="sm"
          onClick={() => setViewFilter(2)}
        >
          未完成
        </Button>
      </div>
      <hr />
      <TodoList
        handleCompleted={handleCompleted}
        handleEditedToggle={handleEditedToggle}
        handleDelete={handleDelete}
        handleEditedSave={handleEditedSave}
        todos={todos}
        viewFilter={viewFilter}
      />
    </div>
  )
}
// 輸出元件(函式)
export default TodoApp
