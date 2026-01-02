import React, { useEffect, useState } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'
import { useRef } from 'react';

function TitleCard({title, category}) {

  const[apiData, setApiData] = useState([]);
  const cardRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDEyNWE3M2QxMDg0YmYzNTlkN2EzMWQyNWQ2N2YxNSIsIm5iZiI6MTc2NzM3MzI3Ny4zMjMsInN1YiI6IjY5NTdmOWRkODJjN2Y1Y2FhZTNiZDdjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c4G0yhHUv2ggtvuOToivrTqrbVswigdXpH-leJRn_so'
    }
  };
  

  const handleWheel = (e)=>{
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "popular"}`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results || []))
      .catch(err => {
        console.error(err);
        setApiData([]);
      });
  
    const currentRef = cardRef.current;
    currentRef.addEventListener('wheel', handleWheel);
  
    return () => {
      currentRef.removeEventListener('wheel', handleWheel);
    };
  }, []);
  

  return (
    <div className='title-card'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className='card-list' ref={cardRef}>
        {apiData.map((card, index)=>{
          return <div className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}></img>
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCard