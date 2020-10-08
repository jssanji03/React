import React, { useState } from 'react'

function App() {
  //total-呈現的 setTotal-相當於要執行的function  useState-初始狀態值
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>{total}</h1>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(total - 1)}>-1</button>
    </>
  )
}

export default App
