import React from "react";

import { 
    Container, Botao, BotaoText, TitleDois, TitleUm, Container2, Imagem, TitleDoisContainer, Divisor,
    TitleUmContainer} from "./styles";

// Essa é a sexta tela //

export default function WhatGoalDois ({ navigation }) {
    return (
        <Container>
             
            <TitleUm>What is your goal ?</TitleUm>
            <TitleDois>It will help us to choose a best program for you</TitleDois>

            <Container2>
            <Imagem
                source={require('../WhatGoalDois/Layer.png')}/>
                <TitleUmContainer>Lean & Tone</TitleUmContainer>
                <Divisor></Divisor>
                <TitleDoisContainer>I’m “skinny fat”. look thin but have no shape. I want to add learn muscle in the right way</TitleDoisContainer>
            </Container2>

            <Botao 
            onPress={() => navigation.navigate('WhatGoalTres')}
            >
                <BotaoText>Confirm</BotaoText>
            </Botao>
            
        </Container>

    );
}