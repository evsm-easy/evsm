import React, { useEffect, useState } from 'react'
import { Login, SignUp, Homepage, Landing, Wallet, Deposit, Stations, Withdraw, History, Seller_signup, Seller_login, Admin_Dashboard, Booking } from './pages'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  const [token, setToken] = useState(false)

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])


  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Landing/>}/>
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/seller_signup"} element={<Seller_signup />} />
        <Route path={"/seller_login"} element={<Seller_login setToken={setToken}/>} />
        <Route path={"/login"} element={<Login setToken={setToken} />} />
        {token?<Route path={"/homepage"} element={<Homepage token={token}/>} />:""}
        {token?<Route path={'/wallet'} element={<Wallet token={token}/>}/>:""}
        {token?<Route path={'/deposit'} element={<Deposit token={token}/>}/>:""}
        {token?<Route path={'/stations'} element={<Stations token={token}/>}/>:""}
        {token?<Route path={'/withdraw'} element={<Withdraw token={token}/>}/>:""}
        {token?<Route path={'/history'} element={<History token={token}/>}/>:""}
        {token?<Route path={'/dashboard'} element={<Admin_Dashboard token={token}/>}/>:""}
        {token?<Route path={'/booking'} element={<Booking token={token}/>}/>:""}
      </Routes>
    </div>
  )
}

export default App