import React from "react";

import { 
    Container, Title, TitleD, Botao, BotaoText, TitleT, BotaoLogin, BotaoTextL, Icone, IconeD,
    TituloOu,Divisor, DivisorD, InputName, InputLName, TituloInput, InputEmail, 
    InputPassword, TituloT, ContainerD, ContainerIcon1, ContainerIcon2} from "./styles";

import { AntDesign, MaterialCommunityIcons, Entypo, Feather,  } from '@expo/vector-icons';

// Essa é a sexta tela //

export default function Register ({ navigation }) {
    return (
        <Container>
             
            <Title>Hey there,</Title>
            <TitleD>Create an Account</TitleD>

                <InputName>
                    <TituloInput>First Name</TituloInput>
                    <ContainerIcon1>
                    <AntDesign name="user" size={18} color="#ADA4A5" />
                    </ContainerIcon1>
                </InputName>

                <InputLName placeholder="Last Name">
                    <TituloInput>Last Name</TituloInput>
                    <ContainerIcon1>
                    <AntDesign name="user" size={18} color="#ADA4A5" />
                    </ContainerIcon1>
                </InputLName>
                
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
                <MaterialCommunityIcons name="rectangle-outline" size={24} color="#ADA4A5" />
                <TituloT>By continuing you accept our Privacy Policy and Term of Use</TituloT>
            </ContainerD>

            <Botao 
            onPress={() => navigation.navigate('Profile')}
            >
               <BotaoText>Register</BotaoText>
            </Botao>

            <Divisor></Divisor>
            <TituloOu>or</TituloOu>
            <DivisorD></DivisorD>

                <Icone source={require('../Register/Google.png')} />
                <IconeD source={require('../Register/Face.png')} />

            <TitleT>Already have an account?</TitleT>
            <BotaoLogin
                onPress={() => navigation.navigate('Login')}
            >
                <BotaoTextL>Login</BotaoTextL>
            </BotaoLogin>


            
            
        </Container>

    );
}