import { Container, TitleTask, ButtonTrash, TrashIcon, CheckItem } from "./styles";
// import BouncyCheckbox from "react-native-bouncy-checkbox";
import theme from "../../theme";
import { useState } from "react";
import { Check } from "phosphor-react-native";

type ListItemProps = {
  marketRead: () => void;
  onRemove: () => void;
  title: string;
  mark: boolean;
}

export function ItemTask({marketRead, title, onRemove, mark} : ListItemProps) {

  return (
    <Container>
      <CheckItem marked={mark} onPress={marketRead}>
        {
          mark && <Check size={12} color="#fff"/>
        }        
      </CheckItem>
      <TitleTask marked={mark}>{title}</TitleTask>
      <ButtonTrash onPress={onRemove}>
        <TrashIcon />
      </ButtonTrash>

    </Container>
  )
}