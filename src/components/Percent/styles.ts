import styled from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native';

export const Container = styled.View`
  width: 327px;
  height: 102px;
  align-items: center;
  top: 37px;
  border-radius: 8px;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const ArrowButton = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  top: 8px;
  right: 8px;
`

export const ArrowIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK
}))``

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size:  ${({ theme }) => theme.FONT_SIZE["2XL"]};
  line-height: 41.6px;
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size:  ${({ theme }) => theme.FONT_SIZE.SM};
  line-height: 18.2px;
`