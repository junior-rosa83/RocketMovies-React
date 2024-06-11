import { Container } from "./styles";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button"
import { TagCreateMovie } from "../../components/TagCreateMovie"

export function CreateMovie() {
  return (
    <Container>
      <Header />
      
      <form>
        <ButtonText tittle="Voltar" to="/"/>
        <fieldset>
          <legend>Novo filme</legend>
          <div className="input-wrapper">
            <Input 
              type="text"
              placeholder="Título"
            />
            <Input 
              type="number"
              placeholder="Sua nota (de 0  5)"
            />
          </div>
          
          <TextArea 
            placeholder="Observações"
          />
          
          <div className="tags">
            <p>Marcadores</p>
            <section>
              <TagCreateMovie value="Muito horrivel"/>
              <TagCreateMovie value="Tes" />
              <TagCreateMovie isNew/>
              <TagCreateMovie isNew />
              <TagCreateMovie isNew />
              <TagCreateMovie isNew />

            </section>
          </div>
          
          <div className="contentButton">
            <Button tittle="Excluir filme" opposite/>
            <Button tittle="Salvar alterações"/>
          </div>
          
        </fieldset>
      </form>
    </Container>
  )
}