import { Container } from "./styles";

export function Button({tittle, opposite, loading = false, ...rest}) {
  return (
    <Container type="button" disabled={loading} $opposite={opposite} {...rest}>
      {loading ? "Carregando..." : tittle}
    </Container>
  )
}