import React from 'react';

import './styles.css';
import Logo from '../../assets/images/Logo.svg';
import SetaParaBaixo from '../../assets/images/SetaParaBaixo.svg';
import Graphics1 from '../../assets/images/graphics.jpg';
import Graphics2 from '../../assets/images/graphics2.jpg';

import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div class="landingContainer">
        <nav class="navbar"></nav>
        <div id="main" class="main">
          <div class="logo">
            <h1>DENV</h1>
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
          <div class="divTitle">
            <h2>Sobre</h2>
          </div>

          <div class="hiwCards">
            <div className="hiwCard">
              <span className="hiwTitle">
                <h3>Lorem Ipsum</h3>
              </span>
              <span className="hiwContent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.
                Pulvinar pellentesque habitant morbi tristique senectus et. Dolor sit amet consectetur adipiscing elit duis.
              </span>
            </div>

            <div className="hiwCard">
              <span className="hiwTitle">
                <h3>Lorem Ipsum</h3>
              </span>
              <span className="hiwContent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.
                Pulvinar pellentesque habitant morbi tristique senectus et. Dolor sit amet consectetur adipiscing elit duis.
              </span>
            </div>

            <div className="hiwCard">
              <span className="hiwTitle">
                <h3>Lorem Ipsum</h3>
              </span>
              <span className="hiwContent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.
                Pulvinar pellentesque habitant morbi tristique senectus et. Dolor sit amet consectetur adipiscing elit duis.
              </span>
            </div>
          </div>

        </div>
        <div id="hiw" class="hiw">
          <div class="divTitle">
            <h2>Como Funciona</h2>
          </div>
          
          <div class="hiwParts pt1">
            <img src={Graphics1} alt="exemplos de gráficos"/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu. Arcu dui vivamus arcu felis 
              bibendum ut tristique. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. 
              Purus ut faucibus pulvinar elementum integer enim neque. Rhoncus urna neque viverra justo nec 
              ultrices. In fermentum et sollicitudin ac orci phasellus egestas. Morbi quis commodo odio aenean 
              sed adipiscing diam donec. Nisi vitae suscipit tellus mauris.
            </p>
          </div>

          <div class="hiwParts pt2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu. Arcu dui vivamus arcu felis 
              bibendum ut tristique. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. 
              Purus ut faucibus pulvinar elementum integer enim neque. Rhoncus urna neque viverra justo nec 
              ultrices. In fermentum et sollicitudin ac orci phasellus egestas. Morbi quis commodo odio aenean 
              sed adipiscing diam donec. Nisi vitae suscipit tellus mauris.
            </p>
            <img src={Graphics2} alt="exemplos de gráficos" />
          </div>
        </div>
        <div id="faq" class="faq">

        </div>
      </div>
    );
  }
}
