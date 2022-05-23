import React from "react";

import { Container, Title, TitleD, Imagem, Botao, TitleButton } from "./styles";


// Essa é a terceira tela //

export default function Welcome ({ navigation }) {
    return (
        <Container>
             <Imagem
                source={require('../Welcome/Group.png')}
            />
            <Title>Welcome, Stefani</Title>
            <TitleD>You are all set now, let’s reach your goals together with us</TitleD>
            <Botao 
            onPress={() => navigation.navigate('GetBurn')}
            >
                <TitleButton>Go To Home</TitleButton>
            </Botao>
        </Container>
    );
}