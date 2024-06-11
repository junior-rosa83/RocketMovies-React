import { Container, Profile, Logout } from "./styles";
import { Input } from "../Input"
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input 
        placeholder="Pesquisar pelo titulo"
        type="text"
      /> 

      <div className="box_1">
        <div className="box_2">
          <Profile>
            <strong>Claudionor Junior da Rosa Nilson</strong> 
          </Profile>
          <Logout>
            <span>Sair</span> 
          </Logout>
        </div>
        <Link to="/profile">
          <img src="https://github.com/junior-rosa83.png" alt="Imagem do usúario" /> 
        </Link>  
      </div> 
    </Container>
  )

}