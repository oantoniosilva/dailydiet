import { Highlight } from "@components/Highlight";
import { Container } from "./styles";

export function SummaryCard() {
  return (
    <Container
      cardSize="XS"
      cardStyle="RED_LIGHT"
    >
      <Highlight 
        title='90,86%'
        subtitle='das refeições dentro dieta'
      />
    </Container>
  )
}
