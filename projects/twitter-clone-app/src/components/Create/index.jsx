import React, { useState } from 'react'

import api from '../../service/api';

const Create = () => {
  const [post, setPost] = useState('');

  data = {
    username: '@anomolos',
    post: post
  }

  const postData = () => {
    api.post('/posts', data).then((response) => {
      console.log('Dados salvos' + response.data);
    })
  }

  return (
    <form>
      <input type='text' onChange={(e) => setPost(e.target.value)} name='post' placeholder='Digite um pensamento...' />
      <button onClick={postData} type='submit'>Post</button>
    </form>
  )
}

export default Create