import React from 'react'

import { Container, Avatar, Info, FollowButton } from './styles';

const FollowSuggestion = ({ name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
}

export default FollowSuggestion;