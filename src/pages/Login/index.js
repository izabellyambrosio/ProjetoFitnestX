import React from "react";

import { 
    Container, Title, TitleD, Botao, BotaoText, TitleT, BotaoRegister, BotaoTextL, Icone, IconeD,
    TituloOu,Divisor, DivisorD, TituloInput, InputEmail, InputPassword, TituloT, ContainerD, ContainerIcon1, 
    ContainerIcon2, ContainerIcon3} from "./styles";

import {MaterialCommunityIcons, Entypo, Feather, SimpleLineIcons} from '@expo/vector-icons';

// Essa é a sexta tela //

export default function Login ({ navigation }) {
    return (
        <Container>
             
            <Title>Hey there,</Title>
            <TitleD>Welcome Back</TitleD>
                
                <InputEmail>
                    <TituloInput>Email</TituloInput>
                    <ContainerIcon1>
                    <MaterialCommunityIcons name="email-outline" size={18} color="#ADA4A5"  />
                    </ContainerIcon1>
                </InputEmail>

                <InputPassword>
                    <TituloInput>Password</TituloInput>
                    <ContainerIcon1>
                    <Entypo name="lock" size={18} color="#ADA4A5" />
                    </ContainerIcon1>
                    <ContainerIcon2>
                    <Feather name="eye-off" size={18} color="#ADA4A5" />
                    </ContainerIcon2>
                </InputPassword>

            <ContainerD>
                <TituloT>Forgot your password?</TituloT>
            </ContainerD>

            <Botao 
            onPress={() => navigation.navigate('Profile')}
            >
                <ContainerIcon3>
                <SimpleLineIcons name="login" size={20} color="#FFFFFF" />
                </ContainerIcon3>

                <BotaoText>Login</BotaoText>
            </Botao>

            <Divisor></Divisor>
            <TituloOu>or</TituloOu>
            <DivisorD></DivisorD>

                <Icone source={require('../Register/Google.png')} />
                <IconeD source={require('../Register/Face.png')} />

            <TitleT>Don’t have an account yet?</TitleT>
            <BotaoRegister
                onPress={() => navigation.navigate('Register')}
            >
                <BotaoTextL>Register</BotaoTextL>
            </BotaoRegister>


            
            
        </Container>

    );
}