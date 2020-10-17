// 導入其它的模組
import React, { useState, useEffect } from 'react'

function TodoApp(props) {
  const [todoInput, setTodoInput] = useState('')
  // 將每個待辨事項改為物件值
  // { id, text: string, completed: bool }
  const [todos, setTodos] = useState([
    { id: 1, text: '買iphone', completed: true },
    { id: 2, text: '學好react', completed: false },
  ])
  //要更改todo 只能用setTodo，但是不能只更改其中的值
  //所以先複製一份更改完成再放回陣列
  // 利用id值尋找對應的item的索引值，然後改變completed值
  const handleComplted = (id) => {
    // 先複製一個新的todos陣列
    const newTodos = [...todos]
    //findindex特性 // 利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((v, i) => v.id === id)

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

  //   const handleDelete = (id) => {
  //     //拷貝一份
  //     const newTodos = [...todos]
  //     //findindex特性
  //     const todoItemIndex = newTodos.findIndex((v, i) => v.id === id)

  //     if (todoItemIndex !== -1) {
  //       newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed
  //       setTodos(newTodos)
  //     }
  //   }

  return (
    <>
      <h2 className="mt-5">代辦事項</h2>
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
            }
            const newTodos = [newItem, ...todos]
            setTodos(newTodos)
            setTodoInput('')
          }
        }}
      />

      <hr />
      {/* map使用時通常子元素會要求唯一key值(id值)  */}
      {/* 這裡用id作為key值  */}
      {/* 依照每個項目的completed來控制呈現的樣子  */}
      <ul>
        {todos.map((item, index) =>
          item.completed ? (
            <li key={item.text}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleComplted(item.id)}
              />
              <del>{item.text}</del>
              <button onClick={() => handleDelete(item.id)}>刪除</button>
            </li>
          ) : (
            <li key={item.text}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleComplted(item.id)}
              />
              {item.text}
              <button onClick={() => handleDelete(item.id)}>刪除</button>
            </li>
          )
        )}
      </ul>
    </>
  )
}

// 輸出元件(函式)
export default TodoApp
