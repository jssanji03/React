// 導入其它的模組
import React, { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import TodoAppPage from './pages/TodoAppPage'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

function App() {
  const [todos, setTodos] = useState([])
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link> */}
          <MyFooter />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <TodoAppPage todos={todos} setTodos={setTodos} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product/:id?">
              <Product />
            </Route>
          </Switch>
        </MainContent>
      </>
    </Router>
  )
}

// 輸出元件(函式)

export default App
