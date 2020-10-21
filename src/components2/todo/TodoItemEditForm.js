import React, { useState } from 'react'
import { Button, ListGroup, Form } from 'react-bootstrap'

function TodoItemEditForm(props) {
  //   const { id, text, handleEditedSave } = props
  const { todo, handleEditedSave } = props
  const [editText, setEditText] = useState(todo.text)
  return (
    <>
      <ListGroup.Item className="box">
        <Form.Group id="formGridCheckbox">
          <Form.Check
            type="text"
            label={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <div className="btnClass">
            <Button
              className="btn mr-2"
              variant="primary"
              size="sm"
              onClick={() => handleEditedSave(todo.id, editText)}
            >
              儲存
            </Button>
          </div>
        </Form.Group>
      </ListGroup.Item>
      {/* <InputGroup className="inputForm">
        <FormControl type="text" value={text} />
      </InputGroup>
      <div className="btnClass">
        <Button
          className="btn mr-2"
          variant="primary"
          size="sm"
          onClick={editedMethod}
        >
          儲存
        </Button>
      </div> */}
    </>
  )
}

export default TodoItemEditForm
