import styled from 'styled-components';

export const PrisonersPageStyled = styled.div`
  .prisonersTable {
    margin: 20px 0;
    width: 100%;
  }
  .prisonerColored {
    color: ${props => props.theme.colors.main};
    font-weight: 600;
  }
  
  .prisonersBody {
    display: flex;
    flex-direction: column;
  }
  .prisonersBodyRow {
    display: flex;
    flex-direction: column;
  }
  .prisonersItemRowContainer {
    border: 1px solid ${props=>props.theme.colors.main};
    border-radius: 6px;
    margin: 5px 0;
    padding: 5px;
  }
  .prisonersItemRow {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }
  .prisonersItem {
    width: 20px;
    height: 20px;
    fill: ${props=>props.theme.colors.main};
  }
  
  .prisonersItemIconContainer {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  
  .prisonerLink {
    color: ${props=>props.theme.colors.main};
  }
  .prisonersFilterLabel {
    color: ${props=>props.theme.colors.main};
    font-size: 14px;
    font-weight: 600;
    margin-top: 20px;
    display: block;
  }
  .prisonersFilterLabelText {
    color: ${props=>props.theme.colors.text};
  }
  
  .prisonersFilterInput {
    margin-top: 5px;
  }

  @media screen and (min-width: 768px) {
    .prisonersBodyRow {
      width: 50%;
      padding: 5px;
    }
    .prisonersItemRowContainer {
      height: 100%;
      margin: 0;
    }
    .prisonersBody {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  @media screen and (min-width: 1024px) {
    .prisonersBodyRow {
      width: 50%;
    }
  }
`