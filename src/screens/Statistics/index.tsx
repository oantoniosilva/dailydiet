import { Highlight } from "@components/Highlight";
import { SummaryCard } from "@components/SummaryCard";
import { Container } from "./styles";

export function Statistics() {
  return (
    <Container>
      <SummaryCard size="XL" color="GRAY">
        <Highlight title="90,96%" subtitle="das refeições dentro da dieta" />
      </SummaryCard>
    </Container>
  );
}
