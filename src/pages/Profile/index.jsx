import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

export function Profile() {
  return(
    <Container>
      <header>
        <ButtonText tittle="Voltar" to="/"/> 
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/junior-rosa83.png" alt="Foto do usúario" />
          <label htmlFor="avatar">
            <FiCamera />
            <input 
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>
        
        <Input 
          type="text"
          placeholder="Nome completo"
          icon={FiUser}
        />
        <Input 
          type="email"
          placeholder="E-mail"
          icon={FiMail}
        />
        <Input 
          type="password"
          placeholder="Senha antiga"
          icon={FiLock}
        />
        <Input 
          type="password"
          placeholder="Senha nova"
          icon={FiLock}
        />

        <Button tittle="Salvar"/>
      </Form>
    </Container>
  )
}