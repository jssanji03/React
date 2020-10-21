// 導入其它的模組
import React, { useState } from 'react'

function MyButtonOne(props) {
  const innerValue = 200

  return (
    <>
      <button onClick={() => props.setNum(innerValue)}>{props.title}</button>
    </>
  )
}

// 輸出元件(函式)
export default MyButtonOne
