import { Container, Section, ButtonLink } from "./styles";
import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag";
import { NoteItem } from "../../components/NoteItem"
import { NoteFilms } from "../../components/NoteFilms"
import { FiPlus } from "react-icons/fi";

export function Home() {
  return(
    <Container>
      <Header />
      <div className="Content">
        <div className="Tittle">
          <h1>Meus filmes</h1>
          <ButtonLink to="/new">
            <FiPlus />
            Adicionar filme
          </ButtonLink>
        </div>
        <Section>
          <NoteFilms active data={
            {
              tittle: "Interestrelar",
              text: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o  é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As  enviadas anos antes identificaram três planetas potencialmente ",
              tag: [
                {
                  id:1, name: "react"
                },
                {
                  id: 2, name: "node"
                }
              ] 
            }
          }/>
          <NoteFilms active data={
            {
              tittle: "Interestrelar",
              text: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o  é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As  enviadas anos antes identificaram três planetas potencialmente ",
              tag: [
                {
                  id:1, name: "react"
                },
                {
                  id: 2, name: "node"
                }
              ] 
            }
          }/>
          <NoteFilms active data={
            {
              tittle: "Interestrelar",
              text: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o  é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As  enviadas anos antes identificaram três planetas potencialmente ",
              tag: [
                {
                  id:1, name: "react"
                },
                {
                  id: 2, name: "node"
                }
              ] 
            }
          }/>
        </Section>
      </div>
    </Container>
  )
}