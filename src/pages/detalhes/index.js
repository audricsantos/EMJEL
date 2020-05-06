import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from '../detalhes/styles';

export default function Detalhes() {

    const navigation= useNavigation ();

    function navigateToAmbientes() {
        navigation.navigate('Ambientes');
    }

    return (
        <View style={styles.container}>
            <View style={styles.headers}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateToAmbientes                                                                                                                    }>
                    <Feather name="arrow-left" size={28} color="#4682B4" />
                </TouchableOpacity>
            </View>

            <View style={styles.inforLocal}>
                <Text style={styles.infoLocal}>Informações do Local: </Text>
            </View>
            <View style={styles.NomeLocal}>
                <Text style={styles.tittleNome}>Nome do local: </Text>
                <Text style={styles.respNomeLocal}>Cozinha</Text>
            </View>
            <View style={styles.DescriçãoDet}>
                <Text style={styles.DescriçãoDetalhes}>Descrição do Local: </Text>
                <Text style={styles.respDescriçãoDet}>Local possui 5m^2, fogão fica ao lado esquerdo da pia, e a geladeira do lado direito da pia, possui uma liminária...</Text>
            </View>
            <View style={styles.Equipamentos}>
                <Text style={styles.EquipamentoEletro}>Equipamentos eletroeletrônicos:</Text>
                <Text style={styles.respEquipamentoEletro}>2 lâmpadas de gás, um fogão 4 bocas e 1 geladeira.</Text>
            </View>
            <View style={styles.tittleContato}>
                <Text style={styles.entreContato}>Entre em contato com a EMJEL</Text>
            </View>
            <View style={styles.contato}>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.email}>E-mail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>    
                    <Text style={styles.telefone}>Telefone</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
