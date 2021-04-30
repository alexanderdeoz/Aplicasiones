import React, { Component } from 'react'
import { Text, Button,SocialIcon} from 'react-native-elements';
import { View, StyleSheet, Image, ImageBackground, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


const logo = require('./img/logo.png');
const fondo = require('./img/fondo.jpg');
const visto = require('visto.png');


class Registro extends Component{
    render(){
        return(
            <View>
                <ImageBackground source={fondo}  style={styles.fondo}>
                    
                    
                    <View style={styles.Container} >
                    <Image source={logo}  style={styles.Logo}/>
                    <Text style={styles.text}>Nombre Usuario</Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={styles.text}>Correo Electronico</Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={styles.text}>Contraseña</Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={styles.text}>Confirmar Contraseña</Text>
                    <TextInput style={styles.input}></TextInput>

                    <View style={styles.btn}>
                        
                        <SocialIcon style={styles.registrar1}  button light type='linkedin' title='Terminos y Condiciones '/>
       
                            
                            <SocialIcon style={styles.registrar1}  button light type='google-plus-official' title='Registrate con gmail'/>
                      
    
                        </View>
    

                    
                    
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
    Logo:{
  
        width:100,
        height:100
    },
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    registrar1:{
        height:50,
        width:300
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
    btn:{
        marginTop:25
    }


})
 
export default Registro;