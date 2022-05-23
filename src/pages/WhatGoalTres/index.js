import React from "react";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { 
    Container, Botao, BotaoText, TitleDois, TitleUm, Container2, Imagem, TitleDoisContainer, 
    TitleUmContainer, Divisor} from "./styles";

// Essa é a sexta tela //

export default function WhatGoalTres ({ navigation }) {
    return (
        <Container>
             
            <TitleUm>What is your goal ?</TitleUm>
            <TitleDois>It will help us to choose a best program for you</TitleDois>

            <Container2>
            <Imagem
                source={require('../WhatGoalTres/Vector.png')}/>
                <TitleUmContainer>Lose a Fat</TitleUmContainer>
                <Divisor></Divisor>
                <TitleDoisContainer>I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass</TitleDoisContainer>
            </Container2>

            <Botao 
            onPress={() => navigation.navigate('Welcome')}
            >
                <BotaoText>Confirm</BotaoText>
            </Botao>
            
        </Container>

    );
}