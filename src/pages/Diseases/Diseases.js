import React from 'react';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
// import data from '../../data/diseases.json'
import Card from '../../components/Card/Card';

import './styles.css';

export function Diseases() {
  // const diseases = data.filter(data => data.type === 'disease')

  return(
    <>
      <DefaultLayout page='list' >
        <div className="diseasesFound">
          <h1>Doenças encontradas</h1>
          <span>
            2 Tipos de informações
          </span>
        </div>
        <div>
        <Card title="Tuberculose" req="casos_tuberculose"/>
        </div>
        <Card title="Gastos Públicos" req="gastos_publicos"/>
      </DefaultLayout>
    </>
  );
}