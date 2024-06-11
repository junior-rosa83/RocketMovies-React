import { Container, Stars } from "./styles";
import { Tag } from "../Tag"
import { StarOff } from "../StarOff"
import { StarOn } from "../StarOn"

export function NoteFilms( {data, active, ...rest} ) {
  return (
    <Container $active={active} {...rest}>
      <h1>{data.tittle}</h1>
      <Stars>
        <StarOn />
        <StarOn />
        <StarOn />
        <StarOn />
        <StarOff />
      </Stars>
      <p>{data.text}</p>
      {
        data.tag &&
        <footer>
          {
            data.tag.map(tag => <Tag key={tag.id} tittle={tag.name}/>)
          }
        </footer>
      }
    </Container>
  )
}