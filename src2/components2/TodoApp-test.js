// 導入其它的模組
import React, { useState, useEffect } from 'react'
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
  const handleCompleted = (id) => {
    const newTodos = [...todos]
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)
    if (todoItemIndex !== -1) {
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed
      setTodos(newTodos)
    }
  }
  const handleDelete = (id) => {
    const newTodosFinal = todos.filter((item, index) => item.id !== id)

    setTodos(newTodosFinal)
  }
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

  return (
    <div className="container">
      <h2 className="mt-5 text-center">Todo List</h2>
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
    </div>
  )
}
// 輸出元件(函式)
export default TodoApp
