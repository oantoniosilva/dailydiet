import { Avatar, Container, Header, Logo } from "./styles";

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.png'
import { PercentButton } from "@components/PercentButton";
import { Meals } from "@components/Meals";

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

      <PercentButton 
        percentage={90.86}
        description="das refeições dentro da dieta"
      />

      <Meals />
    </Container>
  )
}