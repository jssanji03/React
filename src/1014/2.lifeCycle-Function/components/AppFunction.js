// 導入其它的模組
//useEffect  三合一
import React, { useState, useEffect } from 'react'

function AppFunction(props) {
  // 呼叫useState勾子，設定初始化值為0
  // 回傳一組getter(獲取值)和setter(設定值)陣列
  const [total, setTotal] = useState(0)

  // componentDidMount  虛擬Dom元素
  useEffect(() => {
    console.log('component did mount')
    return () => {
      // componentWillUnmount
      console.log('component will unmount')
    }
  }, [])
  // componentDidUpdate 相依性 當total有副作用-有影響才使用
  useEffect(() => {
    console.log(total)
  }, [total])

  return (
    <>
      {(function () {
        console.log('render')
      })()}
      <button onClick={() => setTotal(2)}>change</button>
    </>
  )
}

// 輸出元件(函式)
export default AppFunction
