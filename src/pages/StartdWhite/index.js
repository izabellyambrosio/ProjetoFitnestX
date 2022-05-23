import React from "react";

import { Container, Title, Imagem, Botao, BotaoText } from "./styles";

// Essa é a primeira tela //

export default function StartdWhite({ navigation }) {
    return (
        <Container>
             <Imagem
                source={require('../StartdWhite/FitnestX.png')}
                />
            <Title>Everybody Can Train</Title>
            <Botao 
            onPress={() => navigation.navigate('StartdBlue')}
            >
                <BotaoText>Get Started</BotaoText>
            </Botao>
        </Container>
    );
}