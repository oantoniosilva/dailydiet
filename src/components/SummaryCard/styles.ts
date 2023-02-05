import styled, { css } from 'styled-components/native';

type IStyledSummaryProps = {
  cardSize: 'LG' | 'XL';
  cardStyle: 'PRIMARY' | 'SECONDARY';
}

type Props = IStyledSummaryProps;

export const Container = styled.View<Props>`
  
  ${({ cardSize }) => {
    switch(cardSize) {
      case 'LG':
        return css`
          position: relative;
          width: 327px;
          height: 102px;
          top: 37px;
          align-items: center;
          border-radius: 8px;
          padding: 20px 16px; 
          margin-bottom: 52px;
        `
      case 'XL':
        return css`
          position: absolute;
          width: 100%;
          height: 200px;
          left: 0;
          right: 0;
          top: 0;
        `
    }
  }}

  ${({ cardStyle }) => {
    switch(cardStyle) {
      case 'PRIMARY':
        return css`
          background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
        `
      case 'SECONDARY':
        return css`
          background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
        `
    }
  }}
`