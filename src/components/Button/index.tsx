import { TouchableOpacityProps } from "react-native";
import { Icon } from "@components/Icon";
import {
  Container,
  Title,
  ButtonStyleVariant,
  ButtonSizeVariant,
  TextStyleProps,
} from "./styles";

type Props = TouchableOpacityProps & {
  title?: string;
  variant?: ButtonStyleVariant;
  size?: ButtonSizeVariant;
  text?: TextStyleProps;
};

export function Button({
  title,
  variant = "SOLID",
  size = "LG",
  text = "PRIMARY",
  ...rest
}: Props) {
  return (
    <Container buttonStyle={variant} buttonSize={size} {...rest}>
      <Icon icon="plus" type="WHITE" />

      <Title textStyle={text}>{title}</Title>
    </Container>
  );
}
