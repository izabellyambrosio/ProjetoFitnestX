import React from "react";

import { Container, Title, Imagem, Botao, BotaoText } from "./styles";

// Essa é a segunda tela //

export default function StartdBlue({ navigation }) {
    return (
        <Container>
             <Imagem
                source={require('../StartdBlue/FitnestX.png')}
                />
            <Title>Everybody Can Train</Title>
            <Botao 
            onPress={() => navigation.navigate('TrackObjective')}
            >
                <BotaoText>Get Started</BotaoText>
            </Botao>
        </Container>
    );
}