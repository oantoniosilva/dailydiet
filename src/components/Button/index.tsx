import { TouchableProps } from "react-native-svg";
import { Container, PlusIcon, Title } from "./styles";

type Props = TouchableProps & {
  title: string;
}

export function Button({ title }: Props) {
  return (
    <Container>
      <PlusIcon />
      <Title>{title}</Title>
    </Container>
  )
}