import React, { useState, useEffect } from 'react'
import { ListGroup, Form, Button } from 'react-bootstrap'

function TodoItem(props) {
  /* 從TodoList props得到的
    todos={todos}
        handleEditedToggle={handleEditedToggle}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        handleEditedSave={handleEditedSave}
        */
  // 解構賦值的語法，先把要用的變數值從props解出來
  /* const {
    todos,
    index,
    completed,
    completedMethod,
    deleteMethod,
    text,
    editedMethod,
  } = props*/
  //改成像從TodoApp得到的
  const { todo, handleEditedToggle, handleCompleted, handleDelete } = props
  return (
    <>
      <ListGroup.Item className="box">
        <Form.Group id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCompleted(todo.id)}
            label={todo.completed ? <del>{todo.text}</del> : todo.text}
          />
          <div className="btnClass">
            <Button
              className="btn mr-2"
              variant="primary"
              size="sm"
              onClick={() => handleEditedToggle(todo.id)}
            >
              編輯
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleDelete(todo.id)}
            >
              刪除
            </Button>
          </div>
        </Form.Group>
      </ListGroup.Item>
    </>
  )
}

export default TodoItem
