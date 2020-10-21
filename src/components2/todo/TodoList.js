import React from 'react'
import TodoItem from './TodoItem'
import TodoItemEditForm from './TodoItemEditForm'
import { InputGroup } from 'react-bootstrap'
import QueueAnim from 'rc-queue-anim'

function TodoList(props) {
  const { todos, viewFilter } = props
  return (
    <>
      <InputGroup className="inputForm">
        <QueueAnim component="ListGroup" type={['right', 'left']} leaveReverse>
          {todos.map((item, index) => {
            // 0=all, 1 = (view completed = true), 2=(view completed =false)
            if (viewFilter === 1 && !item.completed) return <></>

            if (viewFilter === 2 && item.completed) return <></>

            return item.edited ? (
              <TodoItemEditForm key={item.id} todo={item} {...props} />
            ) : (
              <TodoItem key={item.id} todo={item} {...props} />
            )
          })}
        </QueueAnim>
      </InputGroup>
    </>
  )
}

export default TodoList
