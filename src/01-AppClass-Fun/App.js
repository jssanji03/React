// 導入React模組 必要！  { useState }使用狀態{}為部分導入
import React from 'react'
//導入要使用的元件程式，注意路徑要正確，不需加副檔名
import AppClass from './components/AppClass'
import AppFunction from './components/AppFunction'

function App() {
  return (
    <>
      <AppClass title="類別型元件" initvalue={99} />
      <AppFunction title="函式型元件" initvalue={101} />
    </>
  )
}
//輸出元件(函式)
export default App
