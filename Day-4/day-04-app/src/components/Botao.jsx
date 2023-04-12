import React from 'react';
import { useState } from 'react';

const Botao = () => {
  const [i, setI] = useState(0);

  

  function counter() {
     setI(i+1);
  }

  return (
    <>
      <button onClick={counter}>Click me!</button>
      <span>{i}</span>
    </>
  )
}

export default Botao;