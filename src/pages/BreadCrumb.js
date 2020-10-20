import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import 'antd/dist/antd.css'

function BreadCrumb(props) {
  console.log(props)
  let path = ''
  const pathname = props.location.pathname

  switch (pathname) {
    case '/product':
      path = '產品'
      break
    case '/about':
      path = '關於我們'
      break
    case '/todo':
      path = 'Todo List'
      break
    default:
      path = ''
  }
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">首頁</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{path}</Breadcrumb.Item>

        {/* <Breadcrumb.Item>
          <li className="breadcrumb-item active" aria-current="page" />
          {path}
        </Breadcrumb.Item> */}
      </Breadcrumb>
    </>
  )
}

export default withRouter(BreadCrumb)
