import { ButtonFomr, Container, InputFomr, IconAdd } from "./styles";
import { useState } from "react";

export function Form() {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  function handleFocus(){
    setIsFocused(true)
  }

  function handleBlur (){
    setIsFocused(false)
  }

  return (
    <Container>
      <InputFomr
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Add a new task"
        borderColor={isFocused}
      />
      <ButtonFomr>
        <IconAdd />
      </ButtonFomr>
    </Container>
  )
}