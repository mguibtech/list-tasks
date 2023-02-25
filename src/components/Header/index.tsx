import { Container, ImgLogo } from "./styles";
import LogoImg from '../../assets/Logo.png';

export function Header(){
  return(
    <Container>
      <ImgLogo source={LogoImg}/>
    </Container>
  )
}