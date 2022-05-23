import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Imagem = styled.Image`
  position: absolute;
  width: 100%;
  height: 54.99%;
  left: 0%;
  top: 0%;
`;

export const TitleUm = styled.Text`
   position: absolute;
    width: 100%;
    height: 100%;
    left: 10%;
    top: 62%;

    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #1D1617;
`;

export const TitleDois = styled.Text`
    position: absolute;
    width: 75%;
    height: 100%;
    left: 10%;
    top: 68%;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #7B6F72;
`;

export const Botao = styled.TouchableOpacity`
  margin-top: 165%;
  width: 16%;
  height: 8%;
  left: 28%;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #9DCEFF;
`;
