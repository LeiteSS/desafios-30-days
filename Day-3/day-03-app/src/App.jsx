import { useState } from 'react'
import pet from './assets/images/pet.jpeg';

import html from './assets/images/logo-html.png';
import css from  './assets/images/logo-css.png';
import js from './assets/images/logo-js.png';
import react from './assets/images/react.png';

//import './App.css'

function App() {
  // JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

  const header = (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Instructor: {author.firstName} {author.lastName}
        </p>
        <small>Date: {date}</small>
      </div>
  </header>
  );
  
  const image = (
    <div className='container'>
      <img src={pet} alt='Foto de um cachorro olhando triste para vocês'/>
    </div>
  );

  const main = (
    <main>
      <div className='main-wrapper'>
        <p>
          Prerequisite to get started{' '}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>{techsFormatted}</ul>
        {result}
        {personAge}
        {image}
      </div>
  </main>
  );

  const logos = (
    <div className='logos'>
      <img src={html} alt='Logo do HTML' />
      <img src={css} alt='Logo do CSS' />
      <img src={js} alt='Logo do JS' />
      <img src={react} alt='Logo do ReactJS' />
    </div>
  );

  const input = (
    <form id='personal-data'>
      <input type='text' placeholder='First name' />
      <input type='text' placeholder='Last Name' />
      <input type='text' placeholder='Email' />
    </form>
  );

  const subscribe = (
    <section id='subscribe'>
      <h2 className='title-section'>Subscribe</h2>
      <p>Sign up with your email address to receive news and updates</p>
      {input}
    </section>

  );


  const copyRight = 'Copyright 2020';

  const footer = (
    <footer>
      <div className='footer-wrapper'>
        <p>{copyRight}</p>
      </div>
    </footer>
  );

  return (
    <div className='app'>
      {header}
      {main}
      {logos}
      {subscribe}
      {footer}
    </div>
  );
}

export default App;
