import React from 'react'

import './style.css';

const Bar = ({ percent, text }) => {
  console.log(percent);

  return (
    <div className='bar' style={{ width: `${percent}%`}}><p>{text}</p></div>
  );
}

export default Bar