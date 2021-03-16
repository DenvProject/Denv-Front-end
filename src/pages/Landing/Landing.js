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

        </div>
        <div id="faq" class="faq">

        </div>
      </div>
    );
  }
}
