import React from 'react';

import { useHistory } from 'react-router-dom';

import buttonIcon from '../../assets/images/buttonIcon.svg';

import './Card.css';

export default function Card({title}) {
  const history = useHistory();

  return (
    <div className="cardWrapper">
      <div>
        <h1>{title}</h1>
      </div>

      <div>
        <button
          onClick={() => history.push(`/disease/${title}`)}
        >
          <img src={buttonIcon} alt="circle button" />
        </button>
      </div>
    </div>
  );
}