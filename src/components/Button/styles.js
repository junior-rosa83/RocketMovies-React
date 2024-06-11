import styled from "styled-components";

export const Container = styled.button `
  height: 56px;
  width: 100%;
  
  border: none;
  border-radius: 10px;

  background-color: ${({ theme, $opposite }) => $opposite ? theme.COLORS.BACKGROUND_900 : theme.COLORS.ROSE};
  color: ${({ theme, $opposite }) => $opposite ?  theme.COLORS.ROSE : theme.COLORS.GRAY_200};

  font-weight: 500;
  padding: 0 16px;
  margin-top: 16px;

  &:disabled {
    opacity: 0.5;
  }
`