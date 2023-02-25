
import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { Container, TaskCount, TaskCountText, TaskCountView, CountTask } from "./styles"

export function Home() {
  return (
    <Container>
      <Header />
      <Form />
      <TaskCount>
        <TaskCountView>
          <TaskCountText primary>Criadas</TaskCountText>
          <CountTask>0</CountTask>
        </TaskCountView>

        <TaskCountView>
          <TaskCountText>Concluídas</TaskCountText>
          <CountTask>0</CountTask>
        </TaskCountView>
      </TaskCount>
    </Container>
  )
}