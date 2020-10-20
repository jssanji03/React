import React, { useState, useEffect } from 'react'
import { ImStarEmpty } from 'react-icons/im'
import { ImStarFull } from 'react-icons/im'

function Star({ marked, starId }) {
  return (
    <span star-id={starId} role="button">
      {/* 實星 /空星*/}
      {marked ? <ImStarFull /> : <ImStarEmpty />}
    </span>
  )
}

export default Star
