import React from 'react'

function Counter(props) {
  return (
    <>
      <h1>0</h1>
      <button>+1</button>
      <button>-1</button>
    </>
  )
}

//State ->Redux store ,  Props -> 指元件counter
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
