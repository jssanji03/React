// 導入React模組 必要！  { useState }使用狀態{}為部分導入
import React, { useState } from 'react'
//導入要使用的元件程式，注意路徑要正確，不需加副檔名
import AppClass from './components/AppClass'
import AppFunction from './components/AppFunction'

function App() {
  const [num, setNum] = useState(2)
  return (
    <>
      {/* 使用類似HTML標記的方式來放置元件要呈現(渲染)的位置 */}
      {/* 使用類似HTML給定屬性值的方式來傳遞資料到子女元件中 */}
      <AppClass title="類別型元件" initValue={num + 97} />

      <AppFunction title="函式型元件" initValue={num + 99} />
      <button onClick={() => setNum(10)}>更動基本數值</button>
    </>
  )
}
//輸出元件(函式)
export default App
