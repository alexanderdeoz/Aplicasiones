import React, { Component } from 'react'
import { Text, Button ,SocialIcon} from 'react-native-elements';
import { View, StyleSheet, Image, ImageBackground, TextInput ,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Registro  from './registrar'

const logo = require('./img/logo.png');
const fondo = require('./img/fondo.jpg');

class Login extends Component {

    render() {
        return (

            <View>

                <ImageBackground source={fondo} style={styles.fondo}>
                
                    
                    <View style={styles.Container}>

                        <Image source={logo} style={styles.Logo} />
                        <Text style={styles.text}>Usuario</Text>
                        <TextInput style={styles.input}></TextInput>
                        <Text style={styles.text}>Contraseña</Text>
                        <TextInput style={styles.input}></TextInput>

                    </View>

                    <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntxt} >
                            INGRESAR 
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntxt} >
                            REGISTRAR
                            </Text>
                    </TouchableOpacity>
                        <SocialIcon  raised={false} type='gitlab' />
                   
                    
                    </View>

                </ImageBackground>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    fondo: {
        height: '100%',
        width: '100%'
    },

    Logo: {
        height: 250,
        width: 280
    },

    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#FFF',
        fontSize: 20
    },
    input: {
        color: 'black',
        backgroundColor: '#FFF',
        width: 240,
        height: 30

    },
    btns:{
        alignItems:'center'
    },

    btn:{
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#367FA2'
    },
    btntxt: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold'
    },
});

export default Login;