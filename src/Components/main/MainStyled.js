import styled from 'styled-components';

export const MainStyled = styled.main`
  background-color: ${props=>props.theme.colors.background};
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 600px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1024px) {
      width: 800px;
  }


`