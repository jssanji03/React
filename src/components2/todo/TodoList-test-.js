import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import TodoItemEditForm from './TodoItemEditForm'
import { InputGroup, ListGroup } from 'react-bootstrap'

function TodoList(props) {
  const {
    handleCompleted,
    handleDelete,
    todos,
    handleEditedToggle,
    handleEditedSave,
  } = props
  return (
    <>
      <InputGroup className="inputForm">
        <ListGroup variant="flush">
                  {todos.map((item, index) =>
                      item.edited ? (
                          <TodoItemEditForm
                              key={item.id}
                              {...props}
              />
              {/* <TodoItemEditForm
                key={item.id}
                id={item.id}
                text={item.text}
                completed={item.completed}
                handleEditedSave={handleEditedSave}
              /> */}
            ) : (
              <TodoItem
                key={item.id}
                text={item.text}
                completed={item.completed}
                editedMethod={() => handleEditedToggle(item.id)}
                completedMethod={() => handleCompleted(item.id)}
                deleteMethod={() => handleDelete(item.id)}
              />
            )
          )}
        </ListGroup>
      </InputGroup>
    </>
  )
}

export default TodoList
