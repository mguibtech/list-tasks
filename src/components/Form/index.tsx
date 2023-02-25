import { ButtonFomr, Container, InputFomr, IconAdd } from "./styles";
import { useState } from "react";

interface Props {
  addNewTask: () => void;
}

export function Form({addNewTask }: Props) {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [task, setTask] = useState('');

//   function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>){
//     setTask(event.target.value)
// }

  return (
    <Container>
      <InputFomr
        placeholder="Add a new task"
        borderColor={isFocused}
        // onChange={() => setIsFocused(true)}
        onChangeText={text => setTask(text)}
        onFocus={() => setIsFocused(true)}
      />
      <ButtonFomr onPress={addNewTask}>
        <IconAdd />
      </ButtonFomr>
    </Container>
  )
}