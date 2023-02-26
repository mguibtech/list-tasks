import { useState } from "react"
import { View, FlatList, Alert } from "react-native"
import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { ItemTask } from "../../components/ItemTask"
import { ListEmpty } from "../../components/ListEmpty"
import {
  Container,
  TaskCount,
  TaskCountText,
  TaskCountView,
  CountTask,
  InputView,
  InputFomr,
  ButtonFomr,
  IconAdd
} from "./styles"

export function Home() {

  const [newTask, setNewTask] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('')
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [marked, setMarked] = useState<boolean>(false)

  function handleAddNewTask() {
    if (newTask.includes(taskName)) {
      return Alert.alert("Task ja existe", "Ja existe uma task com essa descricao!")
    }else if(taskName === ''){
      return Alert.alert("Atenção", "Você precisa preencher a descrição da tarefa!")
    }

    setNewTask(oldState => [...oldState, taskName])
    setTaskName('')

  }

  function handleMarke(name: string){
    setMarked(!marked)
  }

  function handleRemoveTask(name: string) {
    Alert.alert("Remover", `Deseja remover a task ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setNewTask(oldState => oldState.filter(task => task !== name))
      },
      {
        text: 'Não',
        style: "cancel"
      }
    ])
  }

  return (
    <Container>
      <Header />
      <InputView>
        <InputFomr
          placeholder="Add a new task"
          borderColor={isFocused}
          onChangeText={setTaskName}
          value={taskName}
        />
        <ButtonFomr onPress={handleAddNewTask}>
          <IconAdd />
        </ButtonFomr>
      </InputView>
      {/* <Form addNewTask={handleAddNewTask} /> */}
      <TaskCount>
        <TaskCountView>
          <TaskCountText primary>Criadas</TaskCountText>
          <CountTask>{newTask.length}</CountTask>
        </TaskCountView>

        <TaskCountView>
          <TaskCountText>Concluídas</TaskCountText>
          <CountTask>0</CountTask>
        </TaskCountView>
      </TaskCount>

      <FlatList
        style={{ marginHorizontal: 20 }}
        data={newTask}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <ItemTask
            marke={() => handleMarke(item)}
            title={item}
            // markede={marked}
            onRemove={() => handleRemoveTask(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ListEmpty />
        }
      />


    </Container>
  )
}