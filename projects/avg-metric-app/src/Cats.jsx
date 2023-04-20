import React, { useState } from 'react'

const Cats = () => {
  const [url, setUrl] = useState('');

  function fetch_data() {
    fetch('https://api.thecatapi.com/v1/images/search').then(res => {
      if(res.ok) {
        return res.json();
      }
      throw new Error('Request Failed');
    }, networkError => console.log(networkError.message)
    ).then(jsonRes => {
      setUrl(jsonRes[0].url)
    });
  }

  return (
    <div>
      <img src={url} className='cat_img' />
      <button className='btn' onClick={fetch_data}>Generate!</button>
    </div>
  )
}

export default Cats;