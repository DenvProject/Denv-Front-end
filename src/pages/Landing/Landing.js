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
            <h2>Sobre o DENV</h2>
          </div>

          <div class="aboutCards">
            <div className="aboutCard">
              <span className="aboutTitle">
                <h3>O que é</h3>
              </span>
              <span className="aboutContent">
                O DENV é uma plataforma que disponibiliza gráficos atualizados sobre doenças no Brasil.  
              </span>
            </div>

            <div className="aboutCard">
              <span className="aboutTitle">
                <h3>Quem está por trás</h3>
              </span>
              <span className="aboutContent">
                O DENV está sendo desenvolvido por um grupo de desenvolvedores que conta com 5 integrantes:
                <ul>
                  <li>Rafael Leão</li>
                  <li>Abner Filipe</li>
                  <li>Hugo Sobral</li>
                  <li>Daniela Soares</li>
                  <li>Samuel Nogueira</li>
                </ul>
              </span>
            </div>

            <div className="aboutCard">
              <span className="aboutTitle">
                <h3>Contexto acadêmico</h3>
              </span>
              <span className="aboutContent">
                O DENV é um projeto desenvolvido durante o semestre 2020/2 da UnB pelo grupo lovelace da disciplina
                Requisitos de Software.
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
                <h3>Como exporto o gráfico gerado para usar posteriormente?</h3>
              </span>
              <span className="faqContent">
                Após ter o gráfico gerado, basta clicar no botão "exportar" que o gráfico será baixado.  
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
