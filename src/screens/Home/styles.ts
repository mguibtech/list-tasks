import { PlusCircle } from "phosphor-react-native";
import styled from "styled-components/native";
import theme from "../../theme";

type PropsText  = {
  primary?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const TaskCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TaskCountText = styled.Text<PropsText>`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-weight: 700;
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  line-height: 17px;
  color: ${props => props.primary ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
  margin-right: 8px;

`;

export const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  margin-top: -50px;
`;



interface Props {
  borderColor: boolean;
}

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



export const TaskCountView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 32px 24px;
`;

export const CountTask = styled.Text`
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_400};
  padding:  2px 8px;
  border-radius: 999px;
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-weight: 700;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  line-height: 15px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
  height: 19px;
  width: 25px;

`;

export const Tasks = styled.View`
  width: 100%;
  padding: 0 24px ;
`;

