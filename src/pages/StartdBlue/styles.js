import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  start: {x:1, y:0},
  end: {x:0, y:1},
  colors: ["#92A3FD", "#9DCEFF"]
})`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color: #9DCEFF;
`;

export const Imagem = styled.Image`
  position: absolute;
  top: 46%;
  align-items: center;
`;


export const Title = styled.Text`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 28%;
    top: 52%;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #7B6F72;
`;

export const Botao = styled.TouchableOpacity`
  margin-top: 162%;
  width: 80%;
  height: 8%;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background-color: #fff;
`;

export const BotaoText = styled.Text`
  width: 100%;
  height: 24px;
  left: 36%;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #9DCEFF;
`;
