import React, { useState, useEffect } from 'react'
import Star from './Star'

function StarRating(props) {
  const [rating, setRating] = useState(0)

  const [selection, setSelection] = useState(0)
  const hoverOver = (event) => {
    let val = 0
    if (event && event.target && event.target.getAttribute('star-id'))
      val = event.target.getAttribute('star-id')
    setSelection(val)
  }
  return (
    <>
      <h6>滿意指數：</h6>

      <div
        // 鼠标移入效果
        onMouseEnter={() => hoverOver(null)}
        // 点击选中分数
        onClick={(event) =>
          setRating(event.target.getAttribute('star-id') || rating)
        }
        onMouseOver={hoverOver}
      >
        {/* 创建5个组件 */}
        {Array.from({ length: 5 }, (v, i) => (
          <Star
            starId={i + 1}
            marked={selection ? selection >= i + 1 : rating >= i + 1}
          />
        ))}
      </div>
      {/* <div
        // 鼠标移入效果
        onMouseOut={() => hoverOver(null)}
        // 点击选中分数
        onClick={(event) =>
          setRating(event.target.getAttribute('star-id') || rating)
        }
        onMouseOver={hoverOver}
      >
        <div className="icon">
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
        </div>
      </div> */}
    </>
  )
}

export default StarRating
