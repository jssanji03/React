import React, { useState, useEffect } from 'react'
import { Navbar } from 'react-bootstrap'

function MyFooter(props) {
  return (
    <>
      <footer className="footer mt-auto py-3 fixed-bottom ">
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
    </>
  )
}

export default MyFooter
