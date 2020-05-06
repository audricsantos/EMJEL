import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        padding: 26,
        paddingTop: Constants.statusBarHeight + 20,
        flex: 1,
    },
    tittle: {
        paddingTop: 140,
        paddingBottom: 15,
        color: '#4682B4',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: 24,
    },
    tittleID: {
        borderRadius: 8,
        backgroundColor: '#D4D8DA',
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
        color: '#878889',
        textDecorationLine: 'underline',
    },
    containerSenha: {
        paddingTop: 10,
    },
    tittleSenha: {
        borderRadius: 8,
        backgroundColor: '#D4D8DA',
        paddingLeft: 10,
        paddingTop: 20,
        paddingBottom: 20,
        color: '#878889',
        textDecorationLine: 'underline',
        fontSize: 15,
    },
    containerEntrar: {
        paddingTop: 10,
    },
    tittleEntrar: {
        borderRadius: 8,
        backgroundColor: '#4682B4',
        color: '#fff',
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 145,
    },
    containerNCadastro: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 7,
    },
    tittleNCadastro: {
        color: '#878889',
        textDecorationLine: 'underline',
        fontSize: 13,
    },
})