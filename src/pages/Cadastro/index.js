import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image,TouchableOpacity, TextInput } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from '../Cadastro/styles';

export default function Cadastro() {
    const navigation = useNavigation();
    const [value, onChangeText] = React.useState('Nome da Empresa')
    const [value1, onChangeText1] = React.useState('E-mail')
    const [value2, onChangeText2] = React.useState('Senha')
    const [value3, onChangeText3] = React.useState('Cidade')
    const [value4, onChangeText4] = React.useState('UF')


    return (
        <View style={styles.container}>
            <View styles={styles.header}>
                <Image source={logoImg} />
            </View>
            <View style={styles.containerTittle}>
                <Text style={styles.fazLogin}>Faça seu Cadastro:</Text>
            </View>
            <View style={styles.containerName}>
                <TextInput style={styles.tittleName} onChangeText={text=> onChangeText(text)} value={value} />
            </View>
            <View style={styles.containerEmail}>
                <TextInput style={styles.tittleEmail} onChangeText={text=> onChangeText1(text)} value={value1} />
            </View>
            <View style={styles.containerSenha}>
                <TextInput style={styles.tittleSenha} onChangeText={text=> onChangeText2(text)} value={value2} />
            </View>
            <View style={styles.containerCityUf}>
                <TextInput style={styles.tittleCity} onChangeText={text=> onChangeText3(text)} value={value3} />
                <TextInput style={styles.tittleUf} onChangeText={text=> onChangeText4(text)} value={value4} />
            </View>
            <View style={styles.containerCadastrarse}>
                <TouchableOpacity style={styles.tittleCadastrarse} onPress={()=>{}}>
                    <Text style={styles.Cadastrarse}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}