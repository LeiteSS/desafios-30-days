import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import HexaColor from './components/HexaColor';
import Botao from './components/Botao';

import './App.css'
import InputField from './components/InputField';
import SuccessAlertBox from './components/SuccessAlertBox';
import WarningAlertBox from './components/WarningAlertBox';
import Logos from './components/Logos';
import Subscribe from './components/Subscribe';

function App() {

  return (
    <div className="App">
      <Botao />
      <HexaColor />
      <InputField />
      <SuccessAlertBox />
      <WarningAlertBox />
      <Logos />
      <Subscribe />
    </div>
  )
}

export default App
