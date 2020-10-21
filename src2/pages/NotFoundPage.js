import React, { useState, useEffect } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function NotFoundPage(props) {
  // 或使用useHistory勾子也可以達到同樣效果
  // let history = useHistory()
  return (
    <>
      <h1>Error 404</h1>

      <Button
        className="btn mr-2"
        variant="secondary"
        size="sm"
        onClick={() => {
          props.history.push('/product')
        }}
      >
        回到產品頁
      </Button>

      <hr />
      <Button
        className="btn mr-2"
        variant="secondary"
        size="sm"
        onClick={() => {
          props.history.goBack()
        }}
      >
        回到上一頁
      </Button>
    </>
  )
}

export default withRouter(NotFoundPage)
