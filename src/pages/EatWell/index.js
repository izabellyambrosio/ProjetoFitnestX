import React from "react";

import { Container, Imagem, Botao, TitleDois, TitleUm  } from "./styles";

import { AntDesign } from '@expo/vector-icons';

// Essa é a quinta tela //

export default function EatWell ({ navigation }) {
    return (
        <Container>
             <Imagem
                source={require('../EatWell/Group.png')}
            />
            <TitleUm>Eat Welll</TitleUm>
            <TitleDois>Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun</TitleDois>
            <Botao 
            onPress={() => navigation.navigate('ImproveQuality')}
            >
                <AntDesign name="right" size={17} color="#FFFFFF" />
            </Botao>
        </Container>
    );
}