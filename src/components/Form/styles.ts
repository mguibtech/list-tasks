import styled, {css} from "styled-components/native";
import theme from "../../theme";
import { PlusCircle } from 'phosphor-react-native'

interface Props {
  borderColor: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  margin-top: -50px;
  
`;
export const InputFomr = styled.TextInput.attrs<Props>(({theme}) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
  autoCapitalize: "sentences",
}))`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-weight: 400;
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  height: 54px;
  color: ${({theme}) => theme.COLORS.GRAY_100}; 
  
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  box-sizing: border-box;
  display: flex;
  margin-right: 4px;

  border: 1px solid ${(p: Props) => p.borderColor ? theme.COLORS.PURPLE : theme.COLORS.GRAY_700};
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ButtonFomr = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;

  background-color: ${({theme}) => theme.COLORS.BLUE_DARK};
  border-radius: 6px;
`;

export const IconAdd = styled(PlusCircle).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.GRAY_100
}))``;

