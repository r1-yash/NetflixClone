import React from 'react'
import './Home.css' 
import NavBar from '../../components/NavBar/NavBar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'

function Home() {
  return (
    <div className='home'>
        <NavBar/>
        <div className="hero">
          <img src={hero_banner} className='banner-img'></img>
          <div className="hero-caption">
            <img src={hero_title} className='caption-img'></img>
            <p>Hakan is a young shopkeeper whose modern world gets turned upside down when he learns that he is connected to a secret ancient order that is tasked with protecting Istanbul from an immortal enemy.</p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon}></img>Play</button>
              <button className='btn btn-dark'><img src={info_icon}></img>Info</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home