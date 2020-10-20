import React, { useState, useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useHistory, withRouter, Redirect } from 'react-router-dom'

function Login(props) {
  const {
    isAuth,
    setIsAuth,
    authUserAccount,
    setAuthUserAccount,
    authPassword,
    setAuthPassword,
    account,
    password,
  } = props
  if (isAuth) return <Redirect to="/todo" />
  return (
    <>
      {/* <h2>會員登入登出</h2> */}
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>會員登入</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>帳號</Form.Label>
              <Form.Control
                type="text"
                value={authUserAccount}
                onChange={(e) => setAuthUserAccount(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>密碼</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="記得我" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              if (authUserAccount === account && authPassword === password) {
                setIsAuth(true)
                alert('登入成功')
              } else {
                alert('輸入錯誤')
              }
            }}
          >
            登入
          </Button>
          <hr />
          <small>沒有帳號，我要註冊</small>
          <Button
            className="btn mr-2"
            variant="secondary"
            size="sm"
            onClick={() => {
              props.history.push('/register')
            }}
          >
            我要註冊
          </Button>
        </Modal.Footer>
      </Modal.Dialog>

      {/* <h6>會員登入狀態：{isAuth ? '登入' : '登出'}</h6>
      <Button
        className="btn mr-2"
        variant="secondary"
        size="sm"
        onClick={() => setIsAuth(true)}
      >
        登入
      </Button>
      <Button
        className="btn mr-2"
        variant="secondary"
        size="sm"
        onClick={() => setIsAuth(false)}
      >
        登出
      </Button> */}
    </>
  )
}

export default withRouter(Login)
