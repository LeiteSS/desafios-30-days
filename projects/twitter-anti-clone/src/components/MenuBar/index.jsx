import React from 'react'

import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton className='active'>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>
        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>
      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Leite, S. S.</strong>
          <strong>@themilkstripes</strong>
        </ProfileData>
      </Botside>
    </Container>
  );
}

export default MenuBar;