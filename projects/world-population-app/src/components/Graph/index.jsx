import React, { useState } from 'react'

import style from './style.module.css';
import Bar from '../Bar';

const Graph = () => {
  const [country, setCountry] = useState(0);
  
  const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ];

  return (
    <main id='wrapper'>
      <section id={style.graph}>
        <div className={style.barLineContainer}>
          { tenHighestPopulation.map((el, i) => (
            <>
              <Bar key={i} text={el.country} percent={el.population / 100000000} />
            </>
          ))}
        </div>
        
      </section>
    </main>
  )
}

export default Graph;