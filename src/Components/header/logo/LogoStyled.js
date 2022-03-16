import styled from "styled-components";

export const StyledLogo = styled.div`
  .logo {
    height: 40px;
  }
  .statisticsLink {
    //text-transform: uppercase;
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
  }
  .logoTitle {
    display: flex;
    flex-direction: row;
  }
  .logoTextWordStop {
    color: ${props=>props.theme.colors.title};
    margin-right: 10px;
    text-transform: uppercase;
    font-size: 16px;
  }  
  .logoTextWordWar {
    color: ${props=>props.theme.colors.attention};
    text-transform: uppercase;
    font-size: 16px;
  }
  .logoIcon {
    width: 30px;
    height: 30px;
    fill: ${props=>props.theme.colors.title};
    margin-right: 10px;
  }
  
`