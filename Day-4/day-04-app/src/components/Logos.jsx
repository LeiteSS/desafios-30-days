import React from "react";

import html from '../assets/images/logo-html.png';
import css from  '../assets/images/logo-css.png';
import js from '../assets/images/logo-js.png';
import react from '../assets/images/react.png';

const Logos = () => {

  const wrapper = {
    backgroundColor: 'gray',
  }

  const logosStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 300,
    height: 'auto',
  }

  const logosImg = {
    width: 80,
    height: 80,
  }

  return (
    <div style={wrapper}>
      <h4>Front End Technologies</h4>
      <div style={logosStyles}>
        <img style={logosImg} src={html} alt='Logo do HTML' />
        <img style={logosImg} src={css} alt='Logo do CSS' />
        <img style={logosImg} src={js} alt='Logo do JS' />
        <img style={logosImg} src={react} alt='Logo do ReactJS' />
    </div>
    </div>
  )
}

export default Logos;