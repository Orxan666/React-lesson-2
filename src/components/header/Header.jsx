import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
<div className="logo">
    <h1>Logo</h1>
</div>
<div className="big-menu">
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </ul>
</div>
    </header>
  )
}

export default Header