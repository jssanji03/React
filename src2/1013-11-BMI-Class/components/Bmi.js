import React, { useState } from 'react'

//this.setState 是繼承Component來的
class Bmi extends React.Component {
  //Class的狀態必須寫在一起
  constructor(props) {
    super(props)
    this.state = {
      height: ' ',
      weight: ' ',
      bmi: ' ',
    }
  }
  //判斷數字 大於0才會計算  Class內計算函式不需加const ，會變為一個方法
  bodyMass = (h, w) =>
    h > 0 && w > 0 ? (w / Math.pow(h / 100, 2)).toFixed(1) : 0
  //類別方法要這樣寫 才可以綁定
  handleInput = (e) => {
    this.setState({ height: e.target.value })
  }

  //return 寫在render方法裡
  render() {
    return (
      <>
        <h3>你目前的身高（公分)</h3>
        <input
          type="text"
          value={this.state.height}
          onChange={
            //Class裡面給定的值必須以物件形式
            this.handleInput
          }
        />
        <br />
        <h3>你目前的體重（公斤)</h3>
        <input
          type="text"
          value={this.state.weight}
          onChange={(e) => {
            this.setState({ weight: e.target.value })
          }}
        />
        <br />
        <button
          onClick={() =>
            this.setState({
              bmi: this.bodyMass(+this.state.height, +this.state.weight),
            })
          }
        >
          計算BMI
        </button>
        <br />
        BMI:{this.state.bmi}
      </>
    )
  }
}

export default Bmi
