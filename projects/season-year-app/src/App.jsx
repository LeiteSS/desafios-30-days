import { useState } from 'react'
import './App.css'

function App() {
  const [season, setSeason] = useState('')
  const [month, setMonth] = useState('');

  const seasonOfTheYear = () => {
    // September, October or November, the season is Autumn.
    if (month === 'September' || month === 'October' || month === 'November') {
      setSeason('The season is Autumn');
    } else if (month === 'December' || month === 'January' || month === 'February') {
      setSeason('The season is Winter');
    } else if  (month === 'March' || month === 'April' || month === 'May') {
      setSeason('The Season is Spring');
    } else if (month === 'June' || month === 'July' || month === 'August') {
      setSeason('The Season is Summer');
    }
  }

  return (
    <div className="App">       
      <div className="card">
        <input type='text' name='month'  value={month} onChange={e => setMonth(e.target.value)} placeholder='Digite um mês...'/>
        <button onClick={seasonOfTheYear}>
          What season is?
        </button>
        <p>{season !== '' ? season : 'First type a month.'}</p>
      </div>
    </div>
  )
}

export default App
