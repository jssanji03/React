// 導入React模組 必要！
import React from 'react'

//extends繼承類別
class AppClass extends React.Component {
  // 建構式
  constructor(props) {
    //呼叫上層元件 建構式第一行需要使用super呼叫父母類別的建構式
    super(props)
    //這裡建立狀態的初始化值
    this.state = {
      total: props.initvalue,
    }
  }
  //render的回傳值及為後呈現在網頁上的元素
  render() {
    return (
      <>
        {/* 呈現狀態值要使用this.state.total */}
        {/* 使用類似HTML標記的方式來放置元件要呈現（渲染）的位置 */}
        {/* 使用類似HTML給定屬性值的方式來傳遞資料到子女元件中 */}
        <h1>{this.props.title}</h1>
        <h1>{this.state.total}</h1>
        {/* 設定/更動狀態要呼叫this.setState方法，給定之後狀態要改變的物件樣子 */}
        <button onClick={() => this.setState({ total: this.state.total + 1 })}>
          +1
        </button>
        <button onClick={() => this.setState({ total: this.state.total - 1 })}>
          -1
        </button>
      </>
    )
  }
}

export default AppClass
