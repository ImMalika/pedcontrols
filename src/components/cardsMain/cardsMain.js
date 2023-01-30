import React from 'react';
import "./cardsMain.scss";
import { cardsData } from './cardsData';

const CardsMain = () => {
  return (
    <div className='cards'>
      {cardsData.map((item, index) => (
        <div className='cards__card' key={index}>
          <img src={item.img} alt="" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default CardsMain
