import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'

const producto = require('../img/producto.png');


function AgregarProductor() {
    return (
        <Fragment>


            <View style={styles.wrapper}>
                <View style={styles.container}>

                    <View style={styles.box}>

                    </View>

                    <View style={[styles.box, styles.box2]}>
                        <Image source={producto} style={styles.producto} />
                    </View>

                    <View style={styles.box}>


                    </View>
                </View>

                <View style={styles.container2}>

                    <View style={[styles.box, styles.box4]}>
                        <Text style={styles.subtitulo}  > AGREGAR PRODUCTOS</Text>

                        <View style={styles.vistatxt}>
                            
                        <Text style={styles.text}>Codigo Producto </Text>
                        <TextInput style={styles.input}></TextInput>
                        <Text style={styles.text} >Nombre Producto </Text>
                        <TextInput style={styles.input}></TextInput>

                        <Text style={styles.text}>Precio Adquisicion </Text>
                        <TextInput style={styles.input}></TextInput>
                        <Text style={styles.text} >Precio Venta</Text>
                        <TextInput style={styles.input}></TextInput>

                        </View>



                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntxt} >
                            GUARDAR
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntxt} >
                            Cancelar
                            </Text>
                    </TouchableOpacity>


                </View>




            </View>


        </Fragment>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    },
    container2: {
        flex: 8,
        flexDirection: 'column',
        alignItems: 'center'
    },
    box: {
        width: 100,
        height: 100
    },

    box2: {
        backgroundColor: 'purple',
        width: 150,

    },

    box4: {
        backgroundColor: 'purple',
        width: 350,
        height: 330

    },
    producto: {
        top: 10,
        left: 30,
        width: 90,
        height: 90
    },

    subtitulo: {
        top: 10,
        left: 40,
        fontSize: 25,
        fontFamily: 'Times New Roma',
        color: 'white'
    },

    btn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1'
    },
    btntxt: {
        fontSize: 25,
        color: '#7f8c8d',
        fontWeight: 'bold'
    },
    input: {
        color: 'black',
        backgroundColor: '#FFF',
        width: 240,
        height: 30

    },
    text: {
        color: '#FFF',
        fontSize: 20
    },
    vistatxt:{
        top:15,
        left:60
    }
});

export default AgregarProductor;