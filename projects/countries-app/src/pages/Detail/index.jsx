import React from 'react'
import { Link } from 'react-router-dom'

import DetailCard from '../../components/DetailCard';

import './style.css';

const Detail = ({ country }) => {
  return (
    <div className='details'>
      <Link to="/" className='back-link'>
        <button className='back-btn'><i className='fa-solid fa-arrow-left-long'></i> Volte</button>
      </Link>
      <DetailCard country={country} />
    </div>
  );
}

export default Detail;