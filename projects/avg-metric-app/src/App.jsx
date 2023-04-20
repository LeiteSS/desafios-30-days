import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import api from './services/api';
import Cats from './Cats';

function toFindDuplicates(arry) {
  const uniqueElements = new Set(arry);
  let element = '';
  let count = 0;
  const filteredElements = arry.filter(item => {
      if (uniqueElements.has(item)) {
          element = item;
          count++;
      } else {
          return item;
      }
  });

  return [element, count]
}

function App() {
  const [cats, setCats] = useState();
  
  useEffect(() => {
    api
    .get()
    .then((response) => setCats(response.data))
    .catch((err) => {
      console.error('There\' a error' + err);
    });
  }, []);

  //Find the average metric weight and life span of cats in the following API. There are 67 breeds of cats in the API.
  let imperialAvg = 0;
  let list;
  let length = cats?.length;

  cats?.forEach(element => {
    list = element.weight.imperial.match(/\d+/g);
    list.sort(function(x, y) {
      

      return parseInt(x) - parseInt(y);
    });

  
    let result = list.map(function (x) {
      return parseInt(x);
    })

    const sum = (accumulator, result) => accumulator + result;

    const resSum = result.reduce(sum)/2;
    imperialAvg = imperialAvg + resSum;
  });

  let metricAvg = 0;
  cats?.forEach(element => {
    list = element.weight.metric.match(/\d+/g);
    list.sort(function(x, y) {
      return parseInt(x) - parseInt(y);
    });

  
    let result = list.map(function (x) {
      return parseInt(x);
    })

    const sum = (accumulator, result) => accumulator + result;

    const resSum = result.reduce(sum)/2;
    metricAvg = metricAvg + resSum;
  });

  let lifeSpanAvg = 0;
  cats?.forEach(element => {
    list = element.life_span.match(/\d+/g);
    list.sort(function(x, y) {
      return parseInt(x) - parseInt(y);
    });

  
    let result = list.map(function (x) {
      return parseInt(x);
    })

    const sum = (accumulator, result) => accumulator + result;

    const resSum = result.reduce(sum)/2;
    lifeSpanAvg = lifeSpanAvg + resSum;
  });
  // not used
  let imperial = imperialAvg/length;
  // it was used it - he doesn't tell
  let metric = metricAvg/length;

  //How many countries do have cat breeds?
  let countries = []
  cats?.forEach(element => {
    if (element.origin !== countries.indexOf(element.origin)) {
      countries.push(element.origin);
    }
  });

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  let uniq = [...new Set(countries)];

  let country = toFindDuplicates(countries);

  //Arrange countries in ascending order based on the number of cat breeds they have?
  let alphabetically = uniq.sort();

  return (
    <>
      <div className='App'>
      <h1>30 Days Of React</h1>
        <h2>Cats Paradise</h2>
        <h3>There are {length} cats breeds</h3>
        <h3>On average a cat can weight about {metric} Kg and live {lifeSpanAvg / length} years.</h3>
        <h2>How many countries do have cat breeds?</h2>
        <h3>{uniq.length} countries</h3>
        <h2>Which country has the highest number of cat breeds?</h2>
        {country.map((arrItem, arrItemIndex, wholeArray) => 
            <p key={arrItemIndex} >{arrItem}</p>
         )}
         <h2>Arrange countries in ascending order based on the number of cat breeds they have?</h2>
         {alphabetically.map((arrItem, arrItemIndex, wholeArray) => 
            <p key={arrItemIndex} >{arrItem}</p>
         )}
         <Cats />
      </div>
    </>
  )
}

export default App
