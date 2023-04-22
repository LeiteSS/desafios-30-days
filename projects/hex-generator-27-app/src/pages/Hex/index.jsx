import React, { useEffect, useState } from "react";

import './style.css';

function randomHexaNumberGenerator() {
  const randoHex = (Math.random() * 0xfffff * 1000000).toString(16);
  let hex = '#' + randoHex.slice(0, 6);
  return hex;  
}

function arrayOfHexaColors(numberOfHexa) {
  let hexaArr = [];
  let counter = 0;
  while (counter < numberOfHexa) {
    let hex = randomHexaNumberGenerator();
    hexaArr.push(hex);
    counter++;
  }

  return hexaArr;  
}

function Hex() {
  const [hexColor, setHexColor] = useState([]);
 
  useEffect(() => {
    setHexColor(arrayOfHexaColors(27));
  }, []);

  const generateHex = () => {
    setHexColor(arrayOfHexaColors(27));
  }

  return (
    <main id="conteudo">
      <div id="hex">
        {hexColor.map((arrItem, arrItemIndex, wholeArray) => 
            <p style={{ backgroundColor: `${arrItem}`, color: 'black' }} key={arrItemIndex} >{arrItem}</p>
         )}
      </div>
      <button type="submit" onClick={generateHex}>Generate</button>
    </main>
  );
}

export default Hex;