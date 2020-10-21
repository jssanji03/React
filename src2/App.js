// 導入其它的模組
import React, { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import TodoApp from './components/TodoApp'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import TodoAppPage from './pages/TodoAppPage'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </MainContent>
        <MyFooter />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todo" component={TodoAppPage} />
        </Switch>
      </>
    </Router>
  )
}

// 輸出元件(函式)

export default App
