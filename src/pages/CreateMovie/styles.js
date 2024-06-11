import styled from "styled-components";

export const Container = styled.div `
  height: 100vh;
  width: 100%;
  
  > form{
    padding: 24px 123px 85px;
    height: 80%;
    overflow-y: auto;
    margin: 35px 0;

    fieldset {
      border: none;
      
      display: flex;
      flex-direction: column;
      gap: 40px;
      margin-top: 24px;
      
      legend {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 40px;
      }

      .input-wrapper, .contentButton {
        display: flex;
        flex-direction: row;
        gap: 40px;
      }

      .tags {
        p {
          color: #999591;
          font-size: 20px;
          font-weight: 400;

        }
        
        section {
          max-width: 100%;
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
          border-radius: 8px;
          padding: 16px;
          margin-top: 24px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          white-space: wrap;  
        }
      }
    }
    
  }
`

