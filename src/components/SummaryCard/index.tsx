import { ViewProps } from "react-native";
import { CardSizeVariant, CardColorVariant, Container } from "./styles";

type CardProps = ViewProps & {
  size: CardSizeVariant;
  color: CardColorVariant;
};

export function SummaryCard({
  size = "LG",
  color = "GREEN_LIGHT",
  ...rest
}: CardProps) {
  return <Container cardSize={size} cardStyle={color} {...rest}></Container>;
}
