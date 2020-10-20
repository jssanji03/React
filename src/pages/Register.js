import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory, withRouter } from 'react-router-dom'

function Register(props) {
  let history = useHistory()
  const {
    isAuth,
    setIsAuth,
    email,
    setEmail,
    account,
    setAccount,
    password,
    setPassword,
    passwordComfirm,
    setPasswordComfirm,
  } = props

  return (
    <>
      <h1>會員註冊</h1>

      <Button
        className="btn mr-2"
        variant="secondary"
        size="sm"
        onClick={(e) => {
          props.history.push('/login')
        }}
      >
        已有帳號，我要登入
      </Button>
      <hr />
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>帳號</Form.Label>
          <Form.Control
            type="text"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>密碼</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>確認密碼</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="記得我" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          value={passwordComfirm}
          onClick={(e) => setPasswordComfirm(e.target.value)}
        >
          註冊
        </Button>
      </Form>
    </>
  )
}

export default withRouter(Register)
