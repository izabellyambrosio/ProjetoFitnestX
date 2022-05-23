import React from "react";

import { Container, Title, TitleD, Imagem, Botao } from "./styles";

import { AntDesign } from '@expo/vector-icons';

// Essa é a terceira tela //

export default function TrackObjective ({ navigation }) {
    return (
        <Container>
             <Imagem
                source={require('../TrackObjective/Group.png')}
            />
            <Title>Track Your Goal</Title>
            <TitleD>Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals</TitleD>

            
            <Botao 
            onPress={() => navigation.navigate('GetBurn')}
            >
                <AntDesign name="right" size={17} color="#FFFFFF" />
            </Botao>
        </Container>
    );
}