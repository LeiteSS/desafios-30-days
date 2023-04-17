import React from "react";

import './styles.css';

function checkEven(number) {
  if(number % 2 === 0) {
    return true;
  }
}

function checkOdd(number) {
  if(number % 2 !== 0) {
    return true
  }
}

function checkPrime(number) {
  if (number >= 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
  }

  return true;
}

function Even() {
  return (
    <h1>Even</h1>
  )
}

function Prime() {
  return (
    <h1>Prime</h1>
  )
}

function Odd() {
  return (
    <h1>Odd</h1>
  )
}


function Numbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ,31];
  //const numbers = [1, 2, 3];
  //const doubled = numbers.map((number) => number * 2);

  let primes = [];
  let evens = [];
  let odds = [];

  let object = [];


  object.prime = [];
  object.even = [];
  object.odd = [];
  numbers.forEach(ell => {
    const isPrime = checkPrime(ell);
    const isEven = checkEven(ell);  
    const isOdd = checkOdd(ell);
    
    if (isPrime) {
      object.prime.push(ell);
      primes.push(ell)
    }

    if (isEven) {
      object.even.push(ell);
      evens.push(ell);
    }

    if (isOdd) {
      object.odd.push(ell)
      odds.push(ell);
    }
  });
  
  console.log(object);

  return (
    <main id="conteudo">
      <div id="numeros">
        {primes.map((arrItem, arrItemIndex, wholeArray) => 
            <p key={arrItemIndex} id="prime">{arrItem}</p>
         )}
      </div>
      <div>
        {evens.map((arrItem, arrItemIndex, wholeArray) => 
          <p key={arrItemIndex} id="even">{arrItem}</p>
        )}
      </div>
      <div>
        {odds.map((arrItem, arrItemIndex, wholeArray) =>
          <p key={arrItemIndex} id="odd">{arrItem}</p>
        )}
      </div> 
    </main>
  );
}

export default Numbers;

    // return (
    //   <main id="conteudo">
    //     <section id="prime">
    //       <h2>{ell}</h2>
    //     </section>
    //   </main>
    // );

    // return (
    //   <main id="conteudo">
    //     <section id="even">
    //       <h2>{ell}</h2>
    //     </section>
    //   </main>
    // );

    // return (
    //   <main id="conteudo">
    //     <section id="odd">
    //       <h2>{ell}</h2>
    //     </section>
    //   </main>
    // );

          {/* <div>
        {primes.map((arrItem, arrItemIndex, wholeArray) => 
            <p key={arrItemIndex} id="prime">{arrItem}</p>
         )}
      </div>
      <div>
        {evens.map((arrItem, arrItemIndex, wholeArray) => 
          <p key={arrItemIndex} id="even">{arrItem}</p>
        )}
      </div>
      <div>
        {odds.map((arrItem, arrItemIndex, wholeArray) =>
          <p key={arrItemIndex} id="odd">{arrItem}</p>
        )}
      </div> */}