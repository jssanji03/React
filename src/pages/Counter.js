import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'

function Counter(props) {
  const [total, setTotal] = useState(0)
  const [dataLoading, setDataLoading] = useState(false)

  async function getTotalFromServer() {
    //
    setDataLoading(true)

    const url = 'http://localhost:5555/counter/1'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)

    setTotal(data.total)
  }

  // componentDidMount
  useEffect(() => {
    getTotalFromServer()
  }, [])

  // 每次total資料有改變，2秒後關起載入指示
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 2000)
  }, [total])

  const loading = (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
  const display = (
    <>
      <h2>{total}</h2>
      <button>+1</button>
      <button>-1</button>
    </>
  )
  return dataLoading ? loading : display
}

export default Counter
