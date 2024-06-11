import { styled } from "styled-components"

export const Container = styled.div `
  height: 100vh;
  width: 100%;

  > header {
    height: 144px;
    background-color: rgba(255, 133, 155, 0.05);
    padding: 0 144px;
    display: flex;
    align-items: center;
  }
`

export const Form = styled.form `
  width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`

export const Avatar = styled.div `
  width: 186px;
  height: 186px;
  
  position: relative;
  margin: -124px auto 32px;

  > img {
    width: 186px;
    height: 186px; 
    border-radius: 50%;
  }

  > label {
    background: ${({ theme }) => theme.COLORS.ROSE};
    width: 48px;
    height: 48px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 7px;
    bottom: 7px;
    
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`