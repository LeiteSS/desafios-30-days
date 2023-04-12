import React from "react";


const hexaColor = () => {
  let str = '0123456789abcdef';
  let color = '';

  for (let index = 0; index < 6; index++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }

  return '#' + color;
}

const HexaColor = () => {
  const hexaColorStyle = {
    backgroundColor: hexaColor(),
    width: '100%',
    color: 'black',
  }


  return (
    <div style={hexaColorStyle}>
      {hexaColor()}
    </div>
  );
}

export default HexaColor;