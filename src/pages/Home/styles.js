import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div `
  height: 100vh;
  width: 100%;
  overflow: hidden;
  
  > .Content {
    padding: 0 122px;
    height: 80%;
    overflow-y: scroll;

    .Tittle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 47px 0 37px;
      
      button {
        width: 207px;
      }
    }
  }
  
`

export const Section = styled.section `
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const ButtonLink = styled(Link) `
  width: 207px;
  height: 56px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  font-size: 16px;

  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`
