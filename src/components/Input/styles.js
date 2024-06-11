import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  display: flex;
  align-items: center;

  margin-bottom: 8px;
  border-radius: 10px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  > input {
    width: 100%;
    height: 56px;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    padding: 19px;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100} 
    }
  }

  > svg {
    margin-left: 13px;
  }
`