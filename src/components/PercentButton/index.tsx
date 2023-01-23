import { TouchableOpacityProps } from 'react-native';
import {ArrowButton, ArrowIcon, ButtonTypeStyleProps, Container, Description, PercentInfo } from "./styles";

type Props = TouchableOpacityProps & {
  percentage: number;
  description: string;
  type?: ButtonTypeStyleProps;
}

export function PercentButton({ percentage, description, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container 
      type={type}
      {...rest}
    >
      <ArrowButton>
        <ArrowIcon />
      </ArrowButton>

      <PercentInfo>{percentage}%</PercentInfo>
      <Description>{description}</Description>
    </Container>
  )
}
