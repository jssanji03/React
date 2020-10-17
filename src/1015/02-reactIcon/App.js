// 導入其它的模組
import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { MdFavorite } from 'react-icons/md'
//react-icons/md  引入icon

function App(props) {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>React Bootstrap</h1>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
          </Col>
        </Row>
        <MdFavorite />
      </Container>
    </>
  )
}

// 輸出元件(函式)

export default App
