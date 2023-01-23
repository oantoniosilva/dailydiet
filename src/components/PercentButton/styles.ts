import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  position: relative;
  width: 327px;
  height: 102px;
  align-items: center;
  top: 37px;
  border-radius: 8px;
  padding: 20px 16px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  margin-bottom: 52px;
`
export const ArrowButton = styled.View`
  flex: 1;
  position: absolute;
  top: 8px;
  right: 8px;
`

export const ArrowIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK
}))``

export const PercentInfo = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size:  ${({ theme }) => theme.FONT_SIZE["2XL"]}px;
  line-height: 41.6px;
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  line-height: 18.2px;
`













// export const Container = styled.View`
//   position: relative;
//   width: 327px;
//   height: 102px;
//   align-items: center;
//   top: 37px;
//   border-radius: 8px;
//   padding: 20px 16px;
//   background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
//   margin-bottom: 52px;
// `

// export const ArrowButton = styled.TouchableOpacity`
//   flex: 1;
//   position: absolute;
//   top: 8px;
//   right: 8px;
// `

// export const ArrowIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
//   size: 24,
//   color: theme.COLORS.GREEN_DARK
// }))``

// export const Percentage = styled.Text`
//   color: ${({ theme }) => theme.COLORS.GRAY_100};
//   font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
//   font-size:  ${({ theme }) => theme.FONT_SIZE["2XL"]}px;
//   line-height: 41.6px;
// `

// export const Description = styled.Text`
//   color: ${({ theme }) => theme.COLORS.GRAY_200};
//   font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
//   font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
//   line-height: 18.2px;
// `
