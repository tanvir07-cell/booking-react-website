import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'
import Offers from './pages/Offers'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/sign-in" element={<Login/>}/>
          <Route path = "/offers" element={<Offers/>}/>

      </Routes>
      
    </div>
  )
}

export default App
