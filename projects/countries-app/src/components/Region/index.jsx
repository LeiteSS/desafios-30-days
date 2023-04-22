import React from 'react';

const Region = ({ regionFilter }) => {
  return (
    <select name='filter' id='filter' onChange={regionFilter}>
      <option value="All">Filtre por Região</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europa</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default Region;