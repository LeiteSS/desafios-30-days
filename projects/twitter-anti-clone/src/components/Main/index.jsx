import React from 'react'

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon
} from './styles';
import ProfilePage from '../ProfilePage';

const Main = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Leite, S. S.</strong>
          <span>999 Tweets</span>
        </ProfileInfo>

        <ProfilePage />

        <BottomMenu>
          <HomeIcon className="active">
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
          </HomeIcon>
        </BottomMenu>
      </Header>
    </Container>
  )
}

export default Main;