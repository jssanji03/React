import React, { useState, useEffect } from 'react'
import MyNavbar from './components2/MyNavbar'
import MyFooter from './components2/MyFooter'
import TodoApp from './components2/TodoApp'
import MainContent from './components2/MainContent'

function App2() {
  return (
    <>
      <MyNavbar />
      <MainContent>
        <TodoApp />
      </MainContent>
      <MyFooter />
    </>
  )
}

export default App2
