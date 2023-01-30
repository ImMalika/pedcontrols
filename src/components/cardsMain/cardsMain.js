import React from 'react';
import "./cardsMain.scss";
import { cardsData } from './cardsData';
import border1 from "../../media/myimg7.png";
import border2 from "../../media/myimg4.png";

const CardsMain = () => {
  return (
    <div className='cards'>
    <img src={border2} alt="img" className='border2'/>
    <img src={border1} alt="img"  className='border1'/>
      {cardsData.map((item, index) => (
        <div className='cards__card' key={index}>
          <img src={item.img} alt="" />
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default CardsMain
