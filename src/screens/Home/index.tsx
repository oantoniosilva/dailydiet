import { Avatar, Container, Header, Logo, Text } from "./styles";

import { SummaryCard } from "@components/SummaryCard";
import { Meals } from "@components/Meals";
import { Button } from "@components/Button";

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.png';

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

      <SummaryCard />

      <Text>Refeições</Text>

      <Button
        title="Nova refeição"
      />

      <Meals />
    </Container>
  )
}