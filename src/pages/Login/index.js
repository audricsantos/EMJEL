import React,  { Component } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View , Image, Text, TouchableOpacity, TextInput} from 'react-native';

import styles from '../Login/styles';

import logoImg from '../../assets/logoLogin.png';

export default function Login () {
    const navigation = useNavigation();
    const [value, onChangeText] = React.useState('Sua ID')
    const [value1, onChangeText2] = React.useState('Sua Senha')

    function navigateToCadastro() {
        navigation.navigate('Cadastro');
    }
    
    function navigateToAmbiente() {
        navigation.navigate('Ambientes');
    }

    return (
        <View style={styles.container}>
            <View styles={styles.header}>
                <Image source={logoImg} /> 
            </View>
            <View styles={styles.containertittle}>
                <Text style={styles.tittle}>Faça seu Login:</Text>
            </View>
            <View style={styles.containerID}>
                <TextInput style={styles.tittleID} onChangeText={text=> onChangeText(text)} value={value} />
            </View>
            <View style={styles.containerSenha}>
                <TextInput style={styles.tittleSenha} onChangeText={text=> onChangeText2(text)} value={value1}/>
            </View>
            <View style={styles.containerEntrar}>
                <TouchableOpacity onPress={ navigateToAmbiente}>
                    <Text style={styles.tittleEntrar}>ENTRAR</Text>
                </TouchableOpacity>            
            </View>
            <TouchableOpacity style={styles.containerNCadastro} onPress={ navigateToCadastro }>  
                    <Feather name="arrow-right" size={28} color="#4682B4" />
                    <Text style={styles.tittleNCadastro}>Não possuo cadastro</Text>
            </TouchableOpacity>          
        </View>
    );
}
