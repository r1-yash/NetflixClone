import React from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'
function TitleCard() {
  return (
    <div className='title-card'>
      <div className='card-list'>
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