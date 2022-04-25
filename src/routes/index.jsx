import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import CandyStore from '../pages/CandyStore'
import Home from '../pages/Home'
import Login from '../pages/Login'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/candystore' element={<CandyStore/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default AppRoutes