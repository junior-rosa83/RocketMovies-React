import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi"

export function NoteItem({ isNew, value, onClick }) {
  return (
    <Container $isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        placeholder={isNew ? "Novo marcador" : ""}
      />

      <button type="button" onClick={onClick}>
        { isNew ? <FiPlus /> : <FiX /> }
      </button>

    </Container>
  ) 
}