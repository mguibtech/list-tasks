import { Container, DescriptionText, ImgList } from "./styles";
import imgListEmpty from '../../assets/Clipboard.png'

export function ListEmpty() {
  return (
    <Container>
      <ImgList source={imgListEmpty} />
      <DescriptionText bold>Você ainda não tem tarefas cadastradas</DescriptionText>
      <DescriptionText>Crie tarefas e organize seus itens a fazer</DescriptionText>


    </Container>
  )
}