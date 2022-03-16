import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;
  .navList{
    display: flex;
    flex-direction: ${props=>props.isMobileDevice ?'column': 'row'};
    align-items: center;
    list-style: none;
  }
  .navListItem{
    text-transform: uppercase;
    text-decoration: none;
    color: ${props => props.theme.colors.main};
    font-weight: 600;
    margin-right:  ${props=>props.isMobileDevice ?'0': '15px'};
  
    &:hover{
      color: ${props=>props.theme.colors.attention};
    }
  }
  .navListElement {
    padding: 5px;
  }
  .navListItemActive{
    color: ${props=>props.theme.colors.attention};
    
  }
  
  
`