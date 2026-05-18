import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './navbar/nav'
import Contact from './navbar/contact'
import Login from './login.jsx'
import Register from './register.jsx'

const Home = () => {
  return <h1>Home Page</h1>
}

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />

        <Route path='/contact' element={<Contact />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App