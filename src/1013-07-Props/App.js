// 導入React模組 必要！  { useState }使用狀態{}為部分導入
import React, { useState } from 'react'

import MyButtonOne from './components/MyButtonOne'
import MyButtonTwo from './components/MyButtonTwo'
//導入要使用的元件程式，注意路徑要正確，不需加副檔名

function App(props) {
  //getter,setter  利用props傳遞Function
  const [text, setText] = useState(' ')
  return (
    <>
      <h1>MyButtonOne</h1>
      <MyButtonOne title="我要接資料(One)" text={text} />
      <hr />
      <h1>MyButtonTwo</h1>
      <MyButtonTwo title="我要傳資料(Two)" setText={setText} />
    </>
  )
}
//輸出元件(函式)
export default App
