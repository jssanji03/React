import React, { useState } from 'react'

function Bmi(props) {
  const [height, setHeight] = useState(' ')
  const [weight, setWeight] = useState(' ')
  const [bmi, setBmi] = useState(' ')
  //   const bodyMass = (weight / Math.pow(height / 100, 2)).toFixed(2)
  //判斷數字  大於0才會計算
  const bodyMass = (h, w) =>
    h > 0 && w > 0 ? (w / Math.pow(h / 100, 2)).toFixed(1) : 0

  return (
    <>
      <h3>你目前的身高（公分)</h3>
      <input
        type="text"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value)
        }}
      />
      <br />
      <h3>你目前的體重（公斤)</h3>
      <input
        type="text"
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value)
        }}
      />
      <br />
      <button onClick={() => setBmi(bodyMass(+height, +weight))}>
        計算BMI
      </button>
      <br />
      BMI:{bmi}
    </>
  )
}

export default Bmi
