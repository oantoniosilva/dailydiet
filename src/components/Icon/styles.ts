import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'BLACK' | 'WHITE';

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const IconStyle = styled(Feather).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'WHITE' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100
}))``;