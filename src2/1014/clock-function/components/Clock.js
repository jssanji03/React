// 導入react函式庫
import React, { useEffect, useState } from 'react'

// 繼承類別
function Clock (props)  {
  const [date,setDate] = useState(new Date())
  
  useEffect()=> {
    const timerId = setInterval(() => {
      this.tick()
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
}

  tick = () => {
    this.setState({ date: new Date() })
  }

  // render的回傳值即為最後呈現在網頁上的元素
  render() {
    return <>{this.state.date.toLocaleTimeString()}</>
  }
}

export default AppClass
