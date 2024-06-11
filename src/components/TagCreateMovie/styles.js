import styled from "styled-components";

export const Container = styled.div `
  height: 56px;
  min-width: 180px;
  background: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.GRAY_200};
  border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  padding: 16px;
  border-radius: 10px;
  display: flex;
  align-items: end;
  gap: 10px;

  > input {
    height: 100%;
    border: none;
    background: none;
    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};

    &:focus {
      outline: none;
      border-color: transparent; 
    } 
  }


  > button {
    border: none;
    background: none;

    svg {
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
  }
`