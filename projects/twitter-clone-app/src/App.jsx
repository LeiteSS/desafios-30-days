import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import api from './service/api';
import Create from './components/Create';

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    api.get('/posts')
    .then((response) => {

      setPosts(response.data);
    }).catch((err) => {
      console.log("ops! ocorreu um erro:" + err);
    });
  });

  console.log(posts);

  return (
    <>
      <h1>Add Post</h1>
      <Create />
      <h1>Posts</h1>
      {Object.keys(posts).map((obj, i) => (
        <>
          <h3>@{posts[obj].username}</h3>
          <h4>{posts[obj].post}</h4>
        </>
      ))}
    </>
  )
}

export default App
