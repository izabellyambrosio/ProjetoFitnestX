import React from "react";

import { Container, Botao, BotaoText, TitleDois, TitleUm, Container2, Imagem, TitleUmContainer, 
        TitleDoisContainer, Divisor} from "./styles";

// Essa é a sexta tela //

export default function WhatGoal ({ navigation }) {
    return (
        <Container>
             
            <TitleUm>What is your goal ?</TitleUm>
            <TitleDois>It will help us to choose a best program for you</TitleDois>

            <Container2>
                <Imagem source={require('../WhatGoal/Vector.png')}/>
                <TitleUmContainer>Improve Shape</TitleUmContainer>
                <Divisor></Divisor>
                <TitleDoisContainer>I have a low amount of body fat and need / want to build more muscle</TitleDoisContainer>
            </Container2>

            
            <Botao 
            onPress={() => navigation.navigate('WhatGoalDois')}
            >
                <BotaoText>Confirm</BotaoText>
            </Botao>
    
        </Container>

    );
}