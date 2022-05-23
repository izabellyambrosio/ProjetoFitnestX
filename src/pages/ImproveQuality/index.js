import React from "react";

import { Container, Title, TitleD, Imagem, Botao } from "./styles";

import { AntDesign } from '@expo/vector-icons';

// Essa é a sexta tela //

export default function ImproveQuality ({ navigation }) {
    return (
        <Container>
             <Imagem
                source={require('../ImproveQuality/Group.png')}
            />
            <Title>Improve Sleep Quality</Title>
            <TitleD>Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning</TitleD>
            <Botao 
            onPress={() => navigation.navigate('Register')}
            >
                <AntDesign name="right" size={17} color="#FFFFFF" />
            </Botao>
        </Container>
    );
}