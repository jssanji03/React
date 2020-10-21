// 導入其它的模組
import React, { useState } from 'react'
<<<<<<< HEAD
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// 選單連結要使用NavLink取代Link
import { NavLink } from 'react-router-dom'
import Login from '../pages/Login'
=======
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from 'react-bootstrap'
>>>>>>> master

function MyNavbar(props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
<<<<<<< HEAD
        <Navbar.Brand href="#home" style={{ fontSize: '1.5rem' }}>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto linktitle">
            {/* 把Nav.Link作為NavLink來使用 */}
            {/* 一定要加上exact，不然首頁會一直點亮(active) */}
            <Nav.Link as={NavLink} to="/" exact>
              首頁
            </Nav.Link>
            <Nav.Link as={NavLink} to="/todo">
              待辨事項
            </Nav.Link>
            <Nav.Link as={NavLink} to="/product">
              產品
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              關於我們
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              購物車
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/login">
              登入/登出
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              註冊
            </Nav.Link> */}
            <NavDropdown title="會員中心" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/login">
                登入/登出
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/register">
                註冊
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
=======
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
>>>>>>> master
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

// 輸出元件(函式)

export default MyNavbar
