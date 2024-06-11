import { Container } from "./styles";

export function ButtonText({ tittle,  ...rest}) {
  return(
    <Container {...rest}>
      {tittle}
    </Container>
  )
}