import styled from 'styled-components';

export const HeaderStyled = styled.header`
  height: 60px;
  background-color: ${props=>props.theme.colors.background};
  border-bottom: 1px solid ${props=>props.theme.colors.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .navigationContent {
    display: flex;
    align-items: center;
  }
  .settingsIcon {
    width: 30px;
    height: 30px;
    fill: ${props=>props.theme.colors.main};
    &:hover{
      cursor: pointer;
      fill: ${props=>props.theme.colors.attention};
    }
  }
  .themeSwitcherTitle {
    margin-right: 20px;
  }
  .themeSwitcher {
    display: flex;
    align-items: center;
    color: white;
  }
`