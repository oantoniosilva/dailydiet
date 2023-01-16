import { Avatar, Container, Header, Logo } from "./styles";

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.png'
import { Percent } from "@components/Percent";

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

      <Percent />
    </Container>
  )
}