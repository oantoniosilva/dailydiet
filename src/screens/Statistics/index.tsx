import { PercentButton } from "@components/SummaryCard";
import { Container } from "./styles";

export function Statistics() {
  return (
    <Container>
      <PercentButton 
        percentage={90.86}
        description='das refeições dentro da dieta'
      />
    </Container>
  )
}