import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Image ,TouchableOpacity } from 'react-native';
import { Card, SearchBar, Button, Tab } from 'react-native-elements'
import AgregarProductor from './productos/agregar'  
const arroz = require('./img/arroz.jpg')
const huevos = require('./img/huevos.jpg');

function Productos(props) {
    return (
        <View>
             <SearchBar placeholder="Buscar Producto" />
           

            <View>
                <Card>
                    <Card.Title>Arroz</Card.Title>
                    <Card.Image source={arroz} />
                    <Card.Divider />
                    <Card.Title>Cantidad = 5kg</Card.Title>
                    <Card.Title>Costo Proveedor = 2.40$</Card.Title>
                    <Card.Title>P.V.P=  2.50$</Card.Title>
                    <Card.Divider />
                    <View style={styles.container} >
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntxt} >
                            Editar
                            </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntxt} >
                            Eliminar
                            </Text>
                    </TouchableOpacity>
                    </View>
                </Card>

                <Card>
                    <Card.Title>Huevos</Card.Title>
                    <Card.Image source={huevos} />
                    <Card.Divider />
                    <Card.Title>Cantidad = Cubeta</Card.Title>
                    <Card.Title>Costo Proveedor = 2.30$</Card.Title>
                    <Card.Title>P.V.P=  2.50$</Card.Title>
                    <Card.Divider />
                    <View style={styles.container} >
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntxt} >
                            Editar
                            </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntxt} >
                            Eliminar
                            </Text>
                    </TouchableOpacity>
                   
                    </View>
                </Card>

            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    btn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#367FA2'
    },
    btntxt: {
        fontSize: 25,
        color: '#000000',
        fontWeight: 'bold'
    },
})

export default Productos;