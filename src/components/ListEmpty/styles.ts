import styled from "styled-components/native";

type PropsText = {
  bold?: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-top-width: 1px;
  
  margin-top: 6px;
`;

export const ImgList = styled.Image`
  margin-bottom: 16px;
  margin-top: 48px;
  width: 56px;
  height: 56px;
`;

export const DescriptionText = styled.Text<PropsText>`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.GRAY_300};
  font-weight: 700;
  text-align: center;
  size: 20px;
  font-weight: ${({ bold }) => (bold? "bold" : "normal")};
`;