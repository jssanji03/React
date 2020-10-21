// 導入其它的模組
import React, { useState } from 'react'

function MyButtonTwo(props) {
  const innerValue = '我是Two'

  return (
    <>
      {/* 接收父母的Fn資料 () => props.setText(innerValue) */}
      <button onClick={() => props.setText(innerValue)}>{props.title}</button>
    </>
  )
}

// 輸出元件(函式)
export default MyButtonTwo
