import React from 'react';

import './styles.css';
import Logo from '../../assets/images/Logo.svg';
import SetaParaBaixo from '../../assets/images/SetaParaBaixo.svg';
import LogoSUS from '../../assets/images/Logo_SUS.png';
import Graphics from '../../assets/images/graphics2.jpg';

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

          <div class="aboutCards">
            <div className="aboutCard">
              <span className="aboutTitle">
                <h3>Lorem Ipsum</h3>
              </span>
              <span className="aboutContent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.
                Pulvinar pellentesque habitant morbi tristique senectus et. Dolor sit amet consectetur adipiscing elit duis.
              </span>
            </div>

            <div className="aboutCard">
              <span className="aboutTitle">
                <h3>Lorem Ipsum</h3>
              </span>
              <span className="aboutContent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.
                Pulvinar pellentesque habitant morbi tristique senectus et. Dolor sit amet consectetur adipiscing elit duis.
              </span>
            </div>

            <div className="aboutCard">
              <span className="aboutTitle">
                <h3>Lorem Ipsum</h3>
              </span>
              <span className="aboutContent">
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
            <img src={LogoSUS} alt="exemplos de gráficos" />
            <p>
              Os dados são coletados apartir da api do próprio SUS. O DataSUS.
            </p>
          </div>

          <div class="hiwParts pt2">
            <p>
              Depois de processados, os dados são disponibilizados em forma de gráficos.
              A fim de manter a sociedade o mais informada possível.
            </p>
            <img src={Graphics} alt="exemplos de gráficos" />
          </div>
        </div>
        <div id="faq" class="faq">
          <div class="divTitle">
            <h2>FAQ</h2>
          </div>

          <div class="faqCards">
            <div className="faqCard">
              <span className="faqQuestion">
                <h3>Preciso pagar para usar o DENV?</h3>
              </span>
              <span className="faqContent">
                Não, o DENV é uma plataforma gratuita que tem como objetivo manter a população
                o mais informada possível sobre a situação de determinadas doenças.  
              </span>
            </div>

            <div className="faqCard">
              <span className="faqQuestion">
                <h3>Como faço para obter informações sobre alguma doença?</h3>
              </span>
              <span className="faqContent">
                Para acessar os gráficos sobre alguma doença basta no início dessa página, clicar em "Pesquisar",
                Digitar o nome da doença em questão e selecionar os filtros de pesquisa desejados.  
              </span>
            </div>

            <div className="faqCard">
              <span className="faqQuestion">
                <h3>Lorem Ipsum</h3>
              </span>
              <span className="faqContent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.
                Pulvinar pellentesque habitant morbi tristique senectus et. Dolor sit amet consectetur adipiscing elit duis.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
