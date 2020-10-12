// 導入React模組 必要！  { useState }使用狀態{}為部分導入
// import React, { useState, useEffect, useContext } from 'react'
import React, { useState } from 'react'

//開發型自訂元件  開頭第一個字母為大寫-檔名 函式 輸出 名字一致
function AppFunction(props) {
  console.log(props)
  //解構賦值
  //total-得到目前getter的值   setTotal-setter相當於要執行的function-設定目前狀態值
  //useState - 使用狀態 給定初始值

  //呼叫函式 最後回傳陣列 回傳值給前面的變數
  const [total, setTotal] = useState(101)
  //onClick 加入事件監聽 ˋ執行函式
  //宣染方法 createElement
  //JSX回傳值最上層只能有一個根
  //return值即為元件的render,只能有一個根元素進行render
  //多個元件需要用<>...</>(react.Framment)包住
  return (
    <>
      <h1>{props.title}</h1>
      <h1>{total}</h1>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(total - 1)}>-1</button>
    </>
  )
}
//輸出元件(函式)
export default AppFunction
