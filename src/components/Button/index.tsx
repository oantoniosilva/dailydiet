import { TouchableOpacityProps } from "react-native";
import { Icon } from "@components/Icon";
import { Container, Title, ButtonStyleProps, ButtonSizeProps, TextStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonStyleProps;
  size?: ButtonSizeProps;
  text?: TextStyleProps;
}

export function Button({ title, type='SOLID', size='LG', text='PRIMARY', ...rest }: Props) {
  return (
    <Container 
      buttonStyle={type}
      buttonSize={size} 
      {...rest}>

      <Icon
        icon="plus"
        type="WHITE"
      />

      <Title textStyle={text}>
        {title}
      </Title>
    
    </Container>
  )
}