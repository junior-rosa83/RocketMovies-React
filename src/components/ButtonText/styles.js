import { styled } from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link) `
  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.ROSE}
`