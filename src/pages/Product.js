import React, { useState, useEffect } from 'react'
import { Link, Switch, useParams, Redirect } from 'react-router-dom'
import BreadCrumb from './BreadCrumb'

function Product(props) {
  let { id } = useParams()

  console.log(props)
  const { isAuth } = props
  if (isAuth === false) return <Redirect to="/login" />
  return (
    <>
      <BreadCrumb />
      <h1>Product</h1>
      <h3>{id}</h3>
      <h3>目前會員狀態：{isAuth ? '登入' : '登出'}</h3>
    </>
  )
}

export default Product
