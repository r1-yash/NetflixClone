import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

function NavBar() {
  return (
    <div className='navbar'>
        <div className="navbar-left" >
            <img src={logo}></img>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>News & Popular</li>
            <li>My lists</li>
            <li>Browse by Language</li>
        </div>
        <div className="navbar-right"></div>
    </div>
  )
}

export default NavBar