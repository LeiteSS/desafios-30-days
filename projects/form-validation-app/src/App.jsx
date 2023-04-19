import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState(0);
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [messages, setMessages] = useState([]);

  let nextId = 0;

  const save = (event) => {
    event.preventDefault();
    console.log('You cicked here');
    if (nome === '' && sobrenome === '' ) {
      messages.push({
        id: nextId++,
        message: 'Campo não pode está em branco'
      });
    }

    if (senha !== confirmaSenha) {
      messages.push({
        id: nextId++,
        message: 'Senha devem ser iguais'
      });
    }

    if (idade < 18) {
      messages.push({
        id: nextId++,
        message: 'Idade deve ser maior do que 18'
      });
    }

    resetInput();
  }

  const resetInput = () => {
    setNome('');
    setSobrenome('');
    setIdade(0);
    setSenha('');
    setConfirmaSenha('');
  }

  return (
    <div className="App">
      <form onSubmit={save}>
        <input type='text' value={nome} onChange={e => setNome(e.target.value)} placeholder='Nome' />
        <input type='text' value={sobrenome} onChange={e => setSobrenome(e.target.value)} placeholder='Sobrenome'/>
        <input type='number' value={idade} onChange={e => setIdade(e.target.value)}  placeholder='Idade'/>
        <input type='password' value={senha} onChange={e => setSenha(e.target.value)}  placeholder='Senha' />
        <input type='password' value={confirmaSenha} onChange={e => setConfirmaSenha(e.target.value)} placeholder='Confirma senha' />
        <button type='submit'>Confirma</button>  
      </form>
      <div>
        <div style={{ color: 'red' }}>{messages.map(m => (
          <h2 key={m.id}>{m.message}</h2>
        ))}</div>
      </div>
    </div>
  )
}

export default App
