import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const TitleUm = styled.Text`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 28%;
    top: 5%;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #1D1617;
`;

export const TitleDois = styled.Text`
    position: absolute;
    width: 60%;
    height: 100%;
    left: 20%;
    top: 10%;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #7B6F72;
`;

export const Container2 = styled(LinearGradient).attrs({
  start: {x:1, y:0},
  end: {x:0, y:0},
  colors: ["#92A3FD", "#9DCEFF"]
})`
position: relative;
width: 70%;
height: 60%;
left: 1%;
top: 20%;
background: #9DCEFF;
box-shadow: 0px 10px 22px rgba(197, 139, 242, 0.3);
border-radius: 22px;
`;

export const Imagem = styled.Image`
position: absolute;
left: 16%;
top: 7%;
bottom: 40.12%;
`;

export const TitleUmContainer = styled.Text`
  position: absolute;
  width: 100%;
  height: 210px;
  left: 1%;
  top: 71%;

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  color: #FFFFFF;

`;


export const Divisor = styled.View`
position: absolute;
width: 51px;
height: 0px;
left: 43%;
top: 77.5%;
border: 1px solid #F7F8F8;
`;

export const TitleDoisContainer = styled.Text`
position: absolute;
width: 215px;
height: 100%;
left: 35px;
top: 83%;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 18px;
text-align: center;
color: #FFFFFF;

`;


export const Botao = styled.TouchableOpacity`
  margin-top: 50%;
  width: 80%;
  height: 8%;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background-color: #9DCEFF;
`;

export const BotaoText = styled.Text`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 2%;
    top: 30%;
    bottom: 30%;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
`;