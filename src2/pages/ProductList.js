import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'antd/dist/antd.css'
import { ShoppingCartOutlined } from '@ant-design/icons'

function ProductList() {
  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <div className="card-deck">
        <div className="card">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '2rem' }}>
              iphone XS
            </h5>
            <p className="card-text" style={{ fontSize: '1.5rem' }}>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text text-danger">NTD 15000元</p>
          </div>
          <div class="card-footer">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Example select</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Button
              variant="primary"
              style={{ width: '10rem' }}
              type="submit"
              value={''}
            >
              <ShoppingCartOutlined />
            </Button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Book</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text text-danger">NTD 200元</p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-success">
              加入購物車
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">iPad</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text text-danger">NTD 21000元</p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-success">
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      <div className="container">{display}</div>
    </>
  )
}

export default ProductList
