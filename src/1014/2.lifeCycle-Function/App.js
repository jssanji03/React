// 導入其它的模組
import React, { useState } from 'react'
import AppFunction from './components/AppFunction'

function App(props) {
  const [live, setLive] = useState(true)
  return (
    <>
      {/* //開關概念 讓子元素要不要消失 從dom元素消失*/}
      {live && <AppFunction />}
      <button onClick={() => setLive(false)}>Bye</button>
      <button onClick={() => setLive(true)}>Live</button>
    </>
  )
}

// 輸出元件(函式)
export default App
