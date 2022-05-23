import React from "react";

import { Container, Title1, Title2, Botao, BotaoText, ContainerIcon, Imagem, Input1, Input2, Input3, Input4, TituloInput, ContainerIcon1,
ContainerIcon2, ContainerKG, ContainerCM, TituloKG, TituloCM } from "./styles";
import { AntDesign, MaterialCommunityIcons, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';

// Essa é a segunda tela //

export default function Profile({ navigation }) {
    return (
        <Container>

            <Imagem source={require('../Profile/Vector.png')}/>

            <Title1>Let’s complete your profile</Title1>
            <Title2>It will help us to know more about you!</Title2>

            <Input1>
                    <TituloInput>Choose Gender</TituloInput>
                    <ContainerIcon1>
                    <Feather name="users" size={18} color="#ADA4A5" />
                    </ContainerIcon1>
                    <ContainerIcon2>
                    <AntDesign name="down" size={18} color="#ADA4A5" />
                    </ContainerIcon2>
            </Input1>

            <Input2>
                    <TituloInput>Date of Birth</TituloInput>
                    <ContainerIcon1>
                    <MaterialIcons name="date-range" size={18} color="#ADA4A5" />
                    </ContainerIcon1>
            </Input2>

            <Input3>
                    <TituloInput>Your Weight</TituloInput>
                    <ContainerIcon1>
                    <MaterialIcons name="account-balance-wallet" size={18} color="#ADA4A5" />
                    </ContainerIcon1>
            </Input3>

            <Input4>
                    <TituloInput>Your Height</TituloInput>
                    <ContainerIcon1>
                    <MaterialCommunityIcons name="human-male-height-variant" size={18} color="#ADA4A5" />
                    </ContainerIcon1>
            </Input4>

            <ContainerKG>
                <TituloKG>KG</TituloKG>
            </ContainerKG>
            
            <ContainerCM>
                <TituloCM>CM</TituloCM>
            </ContainerCM>

            <Botao 
            onPress={() => navigation.navigate('WhatGoal')}
            >
                <BotaoText>Next</BotaoText>
                <ContainerIcon>
                <AntDesign name="right" size={17} color="#FFFFFF" />
                </ContainerIcon>
            </Botao>
        </Container>
    );
}