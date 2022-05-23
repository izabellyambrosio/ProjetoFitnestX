import React from "react";

import { Container, Title, TitleD, Imagem, Botao, Icones } from "./styles";

import { AntDesign } from '@expo/vector-icons';

// Essa é a quarta tela //

export default function GetBurn ({ navigation }) {
    return (
        <Container>
             <Imagem
                source={require('../GetBurn/Group.png')}
            />
            <Title>Get Burn</Title>
            <TitleD>Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever</TitleD>
            <Botao 
            onPress={() => navigation.navigate('EatWell')}
            >
                <AntDesign name="right" size={17} color="#FFFFFF" />
            </Botao>
        </Container>
    );
}