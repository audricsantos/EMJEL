import React from 'react';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Ambientes() {
    const navigation = useNavigation();

    function navigateToNovoAmbiente() {
        navigation.navigate('NovoAmbiente');
    }

    function navigateToDetalhes() {
        navigation.navigate('Detalhes');
    }
    
    function navigateToLogin() {
        navigation.navigate('Login');
    }

    return (
    <View style={styles.container}>
            <View style= {styles.header}>
                <Image source= {logoImg} />
                <TouchableOpacity onPress={navigateToLogin}>
                    <Feather name="arrow-left" size={28} color="#4682B4" />
                </TouchableOpacity>
            </View>
            <Text style={styles.bemvindo}>Bem vindo!, Nome da empresa</Text>
            <Text style={styles.ambientes}>Ambientes:</Text>
            <TouchableOpacity style={styles.newambiente} onPress={navigateToNovoAmbiente}>
            <Text style={styles.novoambiente}>Cadastrar Novo Ambiente</Text>
            </TouchableOpacity>

            <FlatList 
                data= {[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                style={styles.listageral}
                keyExtractor={ambientes => String(ambientes)}
                showsVerticalScrollIndicator={false}
                renderItem= {()=>(
                    <View style={styles.quadgeral}>
                        <View style= {styles.listaAmbientes1}>
                            <View style={styles.lista1}>
                                <Text style={styles.local}>Local:</Text>
                                <Text style={styles.respLocal}> Cozinha</Text>
                            </View>
                        <View style= {styles.listaAmbientes2}>
                            <View style={styles.lista2}>
                                 <Text style={styles.descrição}>Descrição:</Text>
                                 <Text style={styles.respDescrição}> Descrição do local</Text>
                             </View>
                        </View>
                        <TouchableOpacity style= {styles.listaAmbientes3} onPress={navigateToDetalhes}>
                                <Feather name="arrow-right" size={16} color="#7D7D7E" />
                                <Text style={styles.infor}>mais informações</Text>
                         </TouchableOpacity>
                         </View>
                    </ View>
                )}
            />
    </ View>
    );
}
