import styled from "styled-components";
import background_img from "../../assets/background_img.jpg"

export const Container = styled.div `
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: 45% 55%;
`
export const Form = styled.form `
  grid-column: 1/2;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  padding: 0 160px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.ROSE};
    font-size: 48px;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 14px;
  }

  > h2 {
    font-size: 24px;
    font-weight: 500;
    margin: 48px 0;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.ROSE};
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    margin-top: 42px;
  }

`
export const Background = styled.div `
  grid-column: 2/2;
  flex: 1;
  background: url(${background_img}) repeat center center;
  background-size: cover;
  opacity: 0.4;
`