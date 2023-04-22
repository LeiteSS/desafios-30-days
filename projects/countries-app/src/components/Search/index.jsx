import React from 'react';

const Search = ({ searchCountry }) => {
  return (
    <input 
      type='search'
      id='search'
      name='search'
      onChange={searchCountry}
      placeholder='Pesquise por um pais...'
    />
  );
}

export default Search;