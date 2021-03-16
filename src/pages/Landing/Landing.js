import React from 'react';

import './styles.css';
import Logo from '../../assets/images/Logo.svg';
import SetaParaBaixo from '../../assets/images/SetaParaBaixo.svg';

import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div class="landingContainer">
        <nav class="navbar"></nav>
        <div id="main" class="main">
          <div class="logo">
            <p>DENV</p>
            <img 
              src={Logo}
              alt="Logo do denv"
            />
          </div>

          <button class="searchBtn">Pesquisar</button>

          <a class="arrowDown" href="#about">
            <img 
              src={SetaParaBaixo}
              alt="Botão para levar a tela à ancora sobre"
            />
          </a>
        </div>
        <div id="about" class="about">

        </div>
        <div id="hiw" class="hiw">

        </div>
        <div id="faq" class="faq">
          
        </div>
      </div>
    );
  }
}
