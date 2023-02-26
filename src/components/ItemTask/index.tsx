import { Container, TitleTask, ButtonTrash, TrashIcon, CheckItem } from "./styles";
// import BouncyCheckbox from "react-native-bouncy-checkbox";
import theme from "../../theme";
import { useState } from "react";
import { Check } from "phosphor-react-native";

type ListItemProps = {
  marketRead: (id: number) => void;
  onRemove: () => void;
  title: string;
}

export function ItemTask({marketRead, title, onRemove} : ListItemProps) {

  const [marked, setMarked] = useState(false);

  function handleMark() {
    setMarked(!marked)
  }

  return (
    <Container>
      <CheckItem marked={marked}>
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