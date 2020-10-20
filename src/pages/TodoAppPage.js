import React, { useState, useEffect } from 'react'
import TodoApp from '../components2/TodoApp'
import BreadCrumb from './BreadCrumb'

function TodoAppPage(props) {
  return (
    <>
      <BreadCrumb />
      <TodoApp {...props} />
    </>
  )
}

// 輸出元件(函式)

export default TodoAppPage
