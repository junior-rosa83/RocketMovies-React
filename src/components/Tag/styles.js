import styled from "styled-components";

export const Container = styled.div `
  height: 30px;
  padding: 4px 16px;
  border-radius: 8px;
  
  font-size: 14px;
  color: #E5E5E5;
  white-space: nowrap;
  font-weight: 400;
  
  display: inline-block;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`