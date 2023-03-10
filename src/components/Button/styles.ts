import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonStyleVariant = "SOLID" | "OUTLINE";
export type ButtonSizeVariant = "SM" | "MD" | "LG";

type Props = {
  buttonStyle: ButtonStyleVariant;
  buttonSize: ButtonSizeVariant;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  justify-content: center;
  width: 100%;

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "SOLID":
        return css`
          background-color: ${({ theme }) => theme.COLORS.GRAY_200};
        `;
      case "OUTLINE":
        return css`
          border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
          background: transparent;
        `;
    }
  }}

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "SM":
        return css`
          width: 135px;
          height: 50px;
          padding: 16px 24px;
          border-radius: 6px;
        `;
      case "MD":
        return css`
          width: 191px;
          height: 50px;
          padding: 16px 24px;
          border-radius: 6px;
        `;
      case "LG":
        return css`
          width: 327px;
          height: 50px;
          padding: 16px 24px;
          border-radius: 6px;
        `;
    }
  }}
`;

export type TextStyleProps = "PRIMARY" | "SECONDARY";

type TextButtonProps = {
  textStyle: TextStyleProps;
};

export const Title = styled.Text<TextButtonProps>`
  margin-left: 12px;

  ${({ textStyle }) => {
    switch (textStyle) {
      case "PRIMARY":
        return ({ theme }) => css`
          color: ${theme.COLORS.WHITE};
          font-size: ${theme.FONT_SIZE.SM}px;
          font-family: ${theme.FONT_FAMILY.BOLD};
        `;
      case "SECONDARY":
        return ({ theme }) => css`
          color: ${theme.COLORS.GRAY_100};
          font-size: ${theme.FONT_SIZE.SM}px;
          font-family: ${theme.FONT_FAMILY.BOLD};
        `;
    }
  }}
`;
