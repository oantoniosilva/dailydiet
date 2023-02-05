import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { Plus } from 'phosphor-react-native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

export const Container = styled(TouchableOpacity)`
  width: 327px;
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 6px;
  margin-top: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE
}))``

export const Title = styled.Text`
  ${({ theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};

  margin-left: 8px; 
  font-weight: 700;
`