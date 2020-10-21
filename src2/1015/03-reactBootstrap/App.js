// 導入其它的模組
import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
// import { MdFavorite } from 'react-icons/md'
import logo192 from './images/logo192.png'

function App(props) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo192} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}

// 輸出元件(函式)

export default App
