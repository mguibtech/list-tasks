import { Colors } from "react-native/Libraries/NewAppScreen";
import styled from "styled-components/native";
import { Check, Trash } from 'phosphor-react-native'
import theme from "../../theme";

interface PropsText{
  marked: boolean;
}

export const Container = styled.View`
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
  padding: 12px 8px 12px 12px;
  margin-right: 80px;
  width: 100%;
  /* height: 64px; */

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  margin-bottom: 8px;

  /* flex: none; */
  order: 1px;
  align-self: stretch;
  flex-grow: 0;
`;

export const ButtonTrash = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

`;

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_300,
}))``;

export const CheckIcon = styled(Check).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_300,
}))``;



export const TitleTask = styled.Text.attrs<PropsText>(({theme}) => ({
}))`
  width: 245px;
  color: ${(p:PropsText) => p.marked ? theme.COLORS.GRAY_300 :theme.COLORS.GRAY_100 };
  text-decoration: ${(p:PropsText) => p.marked ? 'line-through' :''};
  font-weight: 400;
  text-align: left;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px; 
`;
// line-through

export const CheckItem = styled.TouchableOpacity<PropsText>`
  width: 24px;
  height: 24px;
  border: ${(p:PropsText) => p.marked ? 0 : 2}px;
  border-color: ${({theme}) => theme.COLORS.BLUE};
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${(p:PropsText) => p.marked ? theme.COLORS.PUTPLE_DARK : theme.COLORS.GRAY_400};

`;


