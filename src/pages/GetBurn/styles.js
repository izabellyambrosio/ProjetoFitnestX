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

export const Title = styled.Text`
   position: absolute;
    width: 100%;
    height: 100%;
    left: 10%;
    top: 500px;

    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #1D1617;
`;

export const TitleD = styled.Text`
    position: absolute;
    width: 315px;
    height: 100%;
    left: 10%;
    top: 550px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #7B6F72;
`;

export const Botao = styled.TouchableOpacity`
  margin-top: 700px;
  width: 16%;
  height: 8%;
  left: 28%;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #9DCEFF;
`;

export const Icones = styled.Image`
  position: absolute;
  left: 45%;
  right: 50px;
  top: 43%;

`;