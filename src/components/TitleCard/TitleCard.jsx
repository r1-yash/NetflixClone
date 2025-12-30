import React, { useEffect } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'
import { useRef } from 'react';

function TitleCard({title}) {

  const cardRef = useRef();

  const handleWheel = (e)=>{
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  }

  useEffect(()=>{
    cardRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className='title-card'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className='card-list' ref={cardRef}>
        {cards_data.map((card, index)=>{
          return <div className='card' key={index}>
            <img src={card.image}></img>
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCard