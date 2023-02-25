
import { View } from "react-native"
import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { ItemTask } from "../../components/ItemTask"
import { ListEmpty } from "../../components/ListEmpty"
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
      <View style={{marginHorizontal:20}}>
        {/* <ItemTask /> */}
        <ListEmpty/>
      </View>


    </Container>
  )
}