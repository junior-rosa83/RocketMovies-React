import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";
export function TagCreateMovie( {value, isNew, onClick, ...rest} ) {
  return (
    <Container $isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew} 
        placeholder={ isNew ? "Novo marcador" : ""}
        {...rest}
      />

      <button type="button" onClick={onClick}>
        { isNew ? <FiPlus/> : <FiX/> }
      </button>

    </Container>
  )
}