// 導入其它的模組
import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
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

=======
import {
  InputGroup,
  FormControl,
  ListGroup,
  Form,
  Button,
} from 'react-bootstrap'

function TodoApp(props) {
  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState([
    //{id,text:string,completed:bool}
    { id: 1, text: 'Buy milk', completed: true },
    { id: 2, text: 'Save Money', completed: false },
  ])
  // const handleCompleted = (id) => {
  //   const newTodos = todos.filter((item, index) => item.id === id)
  //   if (newTodos.index !== -1) {
  //     newTodos.completed = !newTodos.completed
  //     setTodos(newTodos)
  //   }
  // }
>>>>>>> master
  const handleCompleted = (id) => {
    const newTodos = [...todos]
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)
    if (todoItemIndex !== -1) {
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed
      setTodos(newTodos)
    }
  }
<<<<<<< HEAD
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
=======
>>>>>>> master
  const handleDelete = (id) => {
    const newTodosFinal = todos.filter((item, index) => item.id !== id)

    setTodos(newTodosFinal)
  }
<<<<<<< HEAD
=======
  // const handleDelete = (id) => {
  //   const newTodos = [...todos]
  //   const todoItemIndex = newTodos.findIndex((v, i) => v.id === id)
  //   if (todoItemIndex !== -1) {
  //     const newTodosFinal = []
  //     for (let i = 0; i < newTodos.length; i++) {
  //       if (i === todoItemIndex) {
  //       } else {
  //         newTodosFinal.push(newTodos[i])
  //       }
  //     }

  //     setTodos(newTodosFinal)
  //   }
  // }
>>>>>>> master

  return (
    <div className="container">
      <h2 className="mt-5 text-center">Todo List</h2>
<<<<<<< HEAD
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
=======
      {/* <InputGroup className="inputForm">
        <FormControl
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && e.target.value) {
              const newTodoItem = {
                id: +new Date(),
                text: e.target.value,
                completed: false,
              }
              const newTodos = [newTodoItem, ...todos]
              setTodos(newTodos)
              setTodoInput('')
            }
          }}
        />
      </InputGroup> */}
      <hr />
      <InputGroup className="inputForm">
        <ListGroup variant="flush">
          {todos.map((item, index) =>
            item.completed ? (
              <ListGroup.Item key={item.text} className="box">
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleCompleted(item.id)}
                    label={<del>{item.text}</del>}
                  />
                  <div className="btnClass">
                    <Button
                      className="btn mr-2"
                      variant="primary"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      編輯
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      刪除
                    </Button>
                  </div>
                </Form.Group>
              </ListGroup.Item>
            ) : (
              <ListGroup.Item key={item.text} className="box">
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleCompleted(item.id)}
                    label={item.text}
                  />
                  <div className="btnClass">
                    <Button
                      className="btn mr-2"
                      variant="primary"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      編輯
                    </Button>
                    <Button
                      className="btn"
                      variant="primary"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      刪除
                    </Button>
                  </div>
                </Form.Group>
              </ListGroup.Item>
            )
          )}
        </ListGroup>
      </InputGroup>
      {/* {todos.map((value, index) => {
        if (value.completed) {
          return (
            <ListGroup.Item className="inputForm" key={value.text}>
              <del>{value.text}</del>
            </ListGroup.Item>
          )
        }
        return (
          <ListGroup.Item className="inputForm" key={value.text}>
            {value.text}
          </ListGroup.Item>
        )
      })} */}
>>>>>>> master
    </div>
  )
}
// 輸出元件(函式)
export default TodoApp
