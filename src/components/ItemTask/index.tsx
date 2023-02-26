import { Container, TitleTask, ButtonTrash, TrashIcon, CheckItem } from "./styles";
// import BouncyCheckbox from "react-native-bouncy-checkbox";
import theme from "../../theme";
import { useState } from "react";
import { Check } from "phosphor-react-native";

type ListItemProps = {
  onRemove: () => void;
  title: string;
  marke:() => void;
}

export function ItemTask({title, onRemove} : ListItemProps) {

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
      <TitleTask marked={marked}>{title}</TitleTask>
      <ButtonTrash onPress={onRemove}>
        <TrashIcon />
      </ButtonTrash>

    </Container>
  )
}