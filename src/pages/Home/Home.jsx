import React from 'react'
import './Home.css' 
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCard/TitleCard'
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
            <TitleCard/>
          </div>
        </div>
        <div className="more-cards">
        <TitleCard title="Blockbuster Movies"/>
        <TitleCard title="Only on Netflix"/>
        <TitleCard title="Upcoming"/>
        <TitleCard title="Top picks for you"/>
        <Footer/>
        </div>
    </div>
  )
}

export default Home