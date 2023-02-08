import { Feather} from '@expo/vector-icons'
import { Container, IconStyle, ButtonIconTypeStyleProps } from './styles';

type Props = {
  icon: keyof typeof Feather.glyphMap;
  type?: ButtonIconTypeStyleProps;
}

export function Icon({ icon, type='WHITE', ...rest }: Props) {
  return (
    <Container {...rest}>
      <IconStyle
        name={icon}
        type={type}
      />
    </Container>
  )
}