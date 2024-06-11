import styled from "styled-components";

export const Container = styled.div `
  background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
  border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.GRAY_100}`: "none"} ;

  width: 100px;
  padding: 16px;
  font-size: 16px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  
  > input {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;

    &:focus {
      outline: none;
    }
  }
  
  > button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.ROSE}
  }
` 