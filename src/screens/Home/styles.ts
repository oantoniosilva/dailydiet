import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: '#DEDEDE';
`

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
  margin-top: 66px;
  margin-left: 24px;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  margin-top: 64px;
  margin-right: 24px;
  border-radius: 999px;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
  
  width: 100%;
  margin-left: 69px;
`