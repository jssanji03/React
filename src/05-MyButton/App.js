// 導入React模組 必要！  { useState }使用狀態{}為部分導入
import React, { useState } from 'react'

import MyButtonOne from './components/MyButtonOne'
//導入要使用的元件程式，注意路徑要正確，不需加副檔名
import MyButtonTwo from './components/MyButtonTwo'

function App() {
  const [show, setShow] = useState(true)
  return (
    <>
      {/* <h1>0</h1> */}
      <MyButtonOne title="復活吧" clickMethod={() => setShow(true)} />
      {show ? (
        <MyButtonTwo title="我不要活了" clickMethod={() => setShow(true)} />
      ) : (
        ' '
      )}
      {/* {show && (
        <MyButtonTwo title="我不要活了" clickMethod={() => setShow(true)} />
      ) } */}
    </>
  )
}
//輸出元件(函式)
export default App
