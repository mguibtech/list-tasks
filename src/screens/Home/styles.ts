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