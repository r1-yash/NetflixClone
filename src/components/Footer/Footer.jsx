import React from 'react'
import './footer.css'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon}></img>
        <img src={instagram_icon}></img>
        <img src={twitter_icon}></img>
        <img src={youtube_icon}></img>
      </div>
      <ul>
        <li>Audio description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor relations</li>
        <li>Jobs</li>
        <li>Terms of Service</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preference</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 2026 Netflix, Inc. All rights reserved.</p>
    </div>
  )
}

export default Footer