// 導入React模組 必要！  { useState }使用狀態{}為部分導入
import React, { useState } from 'react'

//導入要使用的元件程式，注意路徑要正確，不需加副檔名

function App(props) {
  //getter,setter  利用props傳遞Function
  const [twd, setTwd] = useState(0)
  const [usd, setUsd] = useState(0)
  const usdToTwd = (usd) => (usd * 28.53).toFixed(2)
  const twdToUsd = (twd) => (twd > 0 ? (twd / 28.53).toFixed(2) : 0)

  return (
    <>
      新台幣：
      <input
        type="text"
        value={twd}
        //   表單輸入觸發事件
        onChange={(e) => {
          const newTwd = e.target.value
          setTwd(newTwd)
          setUsd(twdToUsd(newTwd))
        }}
      ></input>
      <br />
      美金：
      <input
        type="text"
        value={usd}
        onChange={(e) => {
          const newUsd = e.target.value
          setUsd(newUsd)
          setTwd(usdToTwd(newUsd))
        }}
      ></input>
    </>
  )
}
//輸出元件(函式)
export default App
