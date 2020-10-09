// 使用狀態
import React, { useState } from 'react'

function App() {
  //解構賦值
  //total-得到目前getter的值   setTotal-setter相當於要執行的function-設定目前狀態值
  //useState - 使用狀態 給定初始值
  const [total, setTotal] = useState(0)
  //onClick 加入事件監聽 ˋ執行函式
  return (
    <>
      <h1>{total}</h1>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(total - 1)}>-1</button>
    </>
  )
}

export default App
