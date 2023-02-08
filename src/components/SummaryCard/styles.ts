import styled, { css } from 'styled-components/native';

type StyledSummaryProps = {
  cardSize: 'XS' | 'SM' | 'LG' | 'XL';
  cardStyle: 'GREEN_LIGHT' | 'RED_LIGHT' | 'GRAY';
}

type Props = StyledSummaryProps;

export const Container = styled.View<Props>`
  align-items: center;
  border-radius: 8px;
  
  ${({ cardSize }) => {
    switch(cardSize) {
      case 'XS':
        return css`
          width: 157.5px;
          height: 107px;
          padding: 16px;          
          margin: 12px;
        `      
      case 'SM':
        return css`
          width: 327px;
          height: 89px;
          padding: 16px;
          margin-bottom: 12px;
          `      
      case 'LG':
        return css`
          position: relative;
          width: 327px;
          height: 102px;
          top: 37px;
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
      case 'GREEN_LIGHT':
        return css`
          background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
        `
      case 'RED_LIGHT':
        return css`
          background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
        `
      case 'GRAY':
        return css`
          background-color: ${({ theme }) => theme.COLORS.GRAY_600};
      ` 
    }
  }}
`