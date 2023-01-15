import { Avatar, Container, Header, Logo } from "./styles";

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.png'

export function Home() {
  return (
    <Container>
      <Header>
        <Logo
          source={logoImg} 
        />

        <Avatar
          source={avatarImg}
        />
      </Header>
    </Container>
  )
}