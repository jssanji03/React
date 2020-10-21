import React, { useState, useEffect } from 'react'

import { InputGroup, FormControl } from 'react-bootstrap'
// import StarRating from '../items/StarRating'

function TodoInput(props) {
  const { todoInput, setTodoInput, todos, setTodos } = props
  return (
    <>
      <InputGroup className="inputForm">
        <FormControl
          type="text"
          value={todoInput}
          placeholder="+ Add List"
          onChange={(e) => setTodoInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && e.target.value) {
              const newTodoItem = {
                id: +new Date(),
                text: e.target.value,
                completed: false,
                edited: false,
              }
              const newTodos = [newTodoItem, ...todos]
              setTodos(newTodos)
              setTodoInput('')
            }
          }}
        />
      </InputGroup>
      {/* <StarRating /> */}
    </>
  )
}

export default TodoInput
