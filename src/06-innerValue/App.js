// 導入React模組 必要！  { useState }使用狀態{}為部分導入
import React, { useState } from 'react'

import MyButtonOne from './components/MyButtonOne'
//導入要使用的元件程式，注意路徑要正確，不需加副檔名

function App(props) {
  const [num, setNum] = useState(0)
  return (
    <>
      <h1>{num}</h1>
      <MyButtonOne title="傳資料" setNum={setNum} />
    </>
  )
}
//輸出元件(函式)
export default App
