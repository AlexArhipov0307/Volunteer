import styled from 'styled-components';

export const Step1Styled = styled.div`
  .step1FormStyled {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .step1Title {
    margin-top: 10px;
    margin-left: 20px;
  }

  .step1Instruction {
    margin-top: 10px;
    text-indent: 20px;
  }

  .imagesList {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  .imagesListItem {
    width: 25%;
    padding: 5px;
  }

  .imageListItemImage {
    width: 100%;
    border-radius: 6px;
  }

  .step1AddImageButton {
    display: block;
    margin: 10px auto;
  }

  .step1FormLabel {
    margin-top: 5px;
    font-size: 14px;
  }

  .step1FormArea {
    height: 140px;
    width: 100%;
    border: 1px solid ${props => props.theme.colors.main};
    border-radius: 6px;
    padding: 5px;
    outline: none;
  }

  .step1FormSubmitButton {
    display: block;
    margin: 10px auto;
  }

`