import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        padding: 26,
        paddingTop: Constants.statusBarHeight + 20,
    },
    fazLogin: {
        color: '#4682B4',
        paddingTop: 150,
        fontSize: 18,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    containerName: {
        paddingTop: 20,
        paddingBottom: 5,
    },
    tittleName: {
        paddingLeft: 10, 
        paddingBottom: 20,
        paddingTop: 20,
        borderRadius: 8,
        backgroundColor: '#D4D8DA',
        color: '#878889',
        textDecorationLine: 'underline',
    },
    containerEmail: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    tittleEmail: {
        paddingLeft: 10,
        paddingBottom: 20,
        paddingTop: 20,
        borderRadius: 8,
        backgroundColor: '#D4D8DA',
        color: '#878889',
        textDecorationLine: 'underline',
    },
    containerSenha: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    tittleSenha: {
        paddingLeft: 10,
        paddingBottom: 20,
        paddingTop: 20,
        borderRadius: 8,
        backgroundColor: '#D4D8DA',
        color: '#878889',
        textDecorationLine: 'underline',
    },
    containerCityUf: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 5,
        paddingTop: 5,
    },
    tittleCity: {
        paddingLeft: 10,
        paddingBottom: 20,
        paddingTop: 20,
        paddingRight: 250,
        borderRadius: 8,
        backgroundColor: '#D4D8DA',
        color: '#878889',
        textDecorationLine: 'underline',
    },
    tittleUf: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 8,
        backgroundColor: '#D4D8DA',
        color: '#878889',
        textDecorationLine: 'underline',
    },
    containerCadastrarse: {
        paddingTop: 5,
    },
    tittleCadastrarse: {
        paddingLeft: 10,
        paddingBottom: 20,
        paddingTop: 20,
        borderRadius: 8,
        backgroundColor: '#4682B4',
    },
    Cadastrarse: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
})