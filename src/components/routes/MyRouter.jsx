import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Home from '../../pages/Home'
const MyRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default MyRouter