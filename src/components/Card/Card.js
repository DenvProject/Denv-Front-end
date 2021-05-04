import React from 'react';

import buttonIcon from '../../assets/images/buttonIcon.svg';

import './Card.css';

export default function Card({title}) {
  return (
    <div className="cardWrapper">
      <div>
        <h1>{title}</h1>
      </div>

      <div>
        <button>
          <img src={buttonIcon} alt="circle button" />
        </button>
      </div>
    </div>
  );
}