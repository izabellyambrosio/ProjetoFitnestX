import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Imagem = styled.Image`
    position: absolute;
    left: 17%;
    right: 12.92%;
    top: 17%;
    bottom: 50%;

`;

export const Title = styled.Text`
position: absolute;
width: 181px;
height: 30px;
left: 30%;
top: 59%;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
text-align: center;
color: #1D1617;
`;

export const TitleD = styled.Text`
position: absolute;
width: 250px;
height: 100%;
left: 22%;
top: 64%;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 18px;
text-align: center;
color: #7B6F72;
`;

export const Botao = styled.TouchableOpacity`
  margin-top: 162%;
  width: 80%;
  height: 8%;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background-color: #9DCEFF;
`;

export const TitleButton = styled.Text`
  width: 100%;
  height: 24px;
  left: 35%;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;