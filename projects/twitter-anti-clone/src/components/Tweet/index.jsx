import React, { useEffect, useState } from 'react'

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './style';

import api from '../../service/api';


const Tweet = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts')
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      }).catch((err) => {
        console.log("ops! ocorreu um erro:" + err);
      });
  });



  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Leite, S. S.</strong>
            <span>@themilkstripes</span>
            <Dot />
            <time>24 de abr</time>
          </Header>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Foguete te ré 🚀</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;