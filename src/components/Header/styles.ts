import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};

  width: 100%;
  height: 173px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE};;
`;

export const ImgLogo = styled.Image`
  
`;
