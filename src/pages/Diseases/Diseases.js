import React from 'react';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';

import data from '../../data/diseases.json'
import Card from '../../components/Card/Card';

import './styles.css';

export default function Diseases() {
  const diseases = data.filter(data => data.type === 'disease')

  return(
    <>
      <DefaultLayout>
        <div className="diseasesFound">
          <h1>Doenças encontradas</h1>
          <span>
            {diseases.length} doenças encontradas
          </span>
        </div>
        {
          data.map((item, index) => (
            <Card key={index} title={item.name} />
          ))
        }
      </DefaultLayout>
    </>
  );
}