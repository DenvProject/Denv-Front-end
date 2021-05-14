import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function BarGraph({ dataset, obj }) {
    const len = dataset.length;
    const dt = [];
    const colors = [
        '#0000ff',
        '#ff0000',
        '#e4ff00',
        '#1fff00',
        '#00ffff',
        '#ff1493',
        '#ff8c00',
        '#a0522d',
        '#696969',
        '#c71585',
        '#4b0082',
        '#008000',
        '#ffd700',
        '#2f4f4f',
        '#a52a2a',
        '#000080',
        '#808000',
        '#90ee90',
        '#dda0dd',
        '#ffb6c1',
        '#ffa500',
        '#00ced1',
        '#bc8f8f',
        '#b0c4de',
        '#228b22',
        '#d2b48c',
        '#dc143c',
        '#e9967a',
    ];
        
    for(let i = 0; i < len; i++) {
        const gastosPorAno = [];

        for(let j = 2008;j < 2021; j++) {
          gastosPorAno.push(obj[dataset[i]][`${j}`].reduce((total, currentElement) => total + currentElement));
        }

        dt.push({
          label: dataset[i],
          data: gastosPorAno,
          backgroundColor: colors[i],
          borderColor: colors[i],
          borderWidth: 1,
        });
    }

    const data = {
        labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: dt,
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Gastos Públicos'
            }
        }
    };

    return (
        <>
            <div className='header'>
                <h1 className='title'>Gastos Públicos</h1>
            </div>
            <Bar data={data} options={options}/>
        </>
    );
}