import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/images/logo_redonda.svg';

import './Header.css';

export default function Header() {
  const history = useHistory();

  return (
    <div className="headerContainer">
      <button
        onClick={() => history.push('/')}
      >
        <img className="logoImg" src={logo} alt="logo DENV" />
      </button>
    </div>
  );
}