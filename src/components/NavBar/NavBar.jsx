import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

function NavBar() {
  return (
    <div className='navbar'>
        <div className="navbar-left" >
            {/* the ul is important as it remove the styling or the bullets */}
            <img src={logo}></img>
            <ul> 
                <li>Home</li>
                <li>TV Shows</li>
                 <li>Movies</li>
                <li>News & Popular</li>
                <li>My lists</li>
                <li>Browse by Language</li>
            </ul>
        </div>
        <div className="navbar-right">
          <img src={search_icon} className='icons'></img>
          <p>Children</p>
          <img src={bell_icon} className='icons'></img>
          <div className='navbar-profile'>
            <img src={profile_img} className='profile'></img>
            <img src={caret_icon} className='profile'></img>
          </div>
        </div>
    </div>
  )
}

export default NavBar