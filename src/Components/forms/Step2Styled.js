import styled from 'styled-components';

export const Step2Styled = styled.div`
  .step2FormStyled {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .step2Title {
    margin-top: 10px;
    margin-left: 20px;
  }

  .step2Instruction {
    margin-top: 10px;
    text-indent: 20px;
  }

  .step2FormLabel {
    margin-top: 5px;
    font-size: 14px;
  }
  
  .step2buttonsOptions {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    
  }
  .step2PrevButton {
    border-radius: 14px 0 0 14px;
    margin-right: 1px;
    width: 120px;
  }
  .step2NextButton {
    border-radius: 0 14px 14px 0;
    width: 120px;
  }

`