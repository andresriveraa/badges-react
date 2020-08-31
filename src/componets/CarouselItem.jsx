import React from 'react';

import playIcon from '../assets/static/plus-icon.png';
import plusIcon from '../assets/static/play-icon.png';

const CarouelItem = ({ cover, title, year, contentRaiting, duration }) => {
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
          <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
        </div>
        <p className="carousel-item__details--title">Título descriptivo</p>
        <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        {`${year} ${contentRaiting} ${duration}`}
      </div>
    </div>
  );
};

export default CarouelItem;
