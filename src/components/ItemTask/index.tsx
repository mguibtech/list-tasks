import { Container, TitleTask, ButtonTrash, TrashIcon, CheckItem } from "./styles";
// import BouncyCheckbox from "react-native-bouncy-checkbox";
import theme from "../../theme";
import { useState } from "react";
import { Check } from "phosphor-react-native";


export function ItemTask() {

  const [marked, setMarked] = useState(false);

  function handleMark() {
    setMarked(!marked)
  }

  return (
    <Container>
      <CheckItem marked={marked} onPress={handleMark}>
        {
          marked && <Check size={12} color="#fff"/>
        }        
      </CheckItem>
      <TitleTask marked={marked}>Integer urna interdum massa libero auctor neque turpis turpis semper.</TitleTask>
      <ButtonTrash>
        <TrashIcon />
      </ButtonTrash>

    </Container>
  )
}