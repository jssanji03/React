// 導入react函式庫
import React from 'react'

// 繼承類別
class AppClass extends React.Component {
  // 建構式
  //子女元件會呼叫兩次: 因為沒有實體化new.. React呼叫第一次先存進ＡＰＩ 初始化後再呼叫第二次
  //呼叫次序  constructor - render - componentDidMount
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
    }

    console.log('constructor')
  }
  //componentDidMount保證出現在網頁上 用來跟其他函式庫整合的方法  最重要
  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  //保證setState完成  確保已經更新的狀態值
  componentDidUpdate() {
    console.log('componentDidUpdate')
    console.log(this.state.total)
  }

  // render的回傳值即為最後呈現在網頁上的元素
  //setState render-componentDidUpdate
  render() {
    console.log('render')
    return (
      <>
        <button
          onClick={() => {
            this.setState({ total: 2 })
            console.log(this.state.total)
          }}
        >
          Change State
        </button>
      </>
    )
  }
}

export default AppClass
