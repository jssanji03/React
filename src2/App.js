import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MyNavbar from './components2/MyNavbar'
import MyFooter from './components2/MyFooter'
import TodoAppPage from './pages/TodoAppPage'
import MainContent from './components2/MainContent'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFoundPage from './pages/NotFoundPage'
import Counter from './pages/Counter'
import Cart from './pages/Cart'
import ProductList from './pages/ProductList'

function App() {
  //需要記憶的狀態都放在App最上層
  const [todos, setTodos] = useState([])
  //控制是否登入
  const [isAuth, setIsAuth] = useState(false)
  //for register
  const [email, setEmail] = useState('')
  const [account, setAccount] = useState('Jess')
  const [password, setPassword] = useState('12345')
  const [passwordComfirm, setPasswordComfirm] = useState('')

  //login
  const [authUserAccount, setAuthUserAccount] = useState('')
  const [authPassword, setAuthPassword] = useState('')

=======

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Counter from './pages/Counter'

function App() {
>>>>>>> master
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
<<<<<<< HEAD
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link> */}
          <MyFooter />
          <Switch>
            <Route path="/" exact>
              <ProductList />
            </Route>

            <Route path="/todo">
              <TodoAppPage todos={todos} setTodos={setTodos} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product/:id?">
              <Product isAuth={isAuth} />
            </Route>
            <Route path="/login">
              <Login
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                authUserAccount={authUserAccount}
                setAuthUserAccount={setAuthUserAccount}
                authPassword={authPassword}
                setAuthPassword={setAuthPassword}
                account={account}
                password={password}
              />
            </Route>
            <Route path="/register">
              <Register
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                email={email}
                setEmail={setEmail}
                account={account}
                setAccount={setAccount}
                password={password}
                setPassword={setPassword}
                passwordComfirm={passwordComfirm}
                setPasswordComfirm={setPasswordComfirm}
              />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            {/* 404找不到網頁，需要放在switch路由表最後一個 */}
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </MainContent>
=======
          <Switch>
            {/* 注意：要加上網址參數 */}
            <Route exact path="/">
              <Counter />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
>>>>>>> master
      </>
    </Router>
  )
}

export default App
