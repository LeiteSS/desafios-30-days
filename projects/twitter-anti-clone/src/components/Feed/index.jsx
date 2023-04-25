import React, { useEffect, useState } from 'react'

import Tweet from '../Tweet';

import api from '../../service/api';

import { Container, Tab, Tweets } from './styles';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts')
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      }).catch((err) => {
        console.log("ops! ocorreu um erro:" + err);
      });
  }, []);

  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  )
}

export default Feed;