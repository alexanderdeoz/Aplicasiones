import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SocialIcon, Avatar } from 'react-native-elements'
import Productos from './productos'
import Login from './index'
import AgregarProductor from './productos/agregar'
import Registro from './registrar'

const avatar = require('./img/avatar.png');
const carro = require('./img/carro.png')

function HomeScreen() {
  return (
    <Fragment>
      
      <View style={styles.wrapper}>
        <View style={styles.container}>

          <View style={styles.box}>
            <Image source={carro} style={styles.carro} />
          </View>

          <View style={[styles.box, styles.box2]}>
            <Text style={styles.titulo}  >FINTECH</Text>
          </View>

          <View style={styles.box}>
            <Image source={avatar} style={styles.avatar} />

          </View>
        </View>

        <View style={styles.container2}>

          <View style={[styles.box, styles.box4]}>
            <Text style={styles.subtitulo}  > PRODUCTOS</Text>
            <Text style={styles.subtitulo2}  > Agregar Productos</Text>
            <SocialIcon style={styles.btn} title='PRODUCTOS CONSUMIBLES' type='linkedin' button />
            <SocialIcon style={styles.btn} title='PRODUCTOS NO CONSUMIBLES' type='linkedin' button />
            <SocialIcon style={styles.btn} title='BEBIDAS ALCOLICAS' type='linkedin' button />
            <SocialIcon style={styles.btn} title='OTROS' type='linkedin' button />
          </View>


        </View>




      </View>


    </Fragment>

  );
}



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>

      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Productos" component={Productos} />

        <Drawer.Screen name="Agregar producto" component={AgregarProductor} />
        <Drawer.Screen name="Registrar" component={Registro} />
        <Drawer.Screen name="Cerrar secion" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
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
  box3: {
    backgroundColor: 'transparent'
  },


  box4: {
    backgroundColor: 'purple',
    width: 350,
    height: 400

  },
  avatar: {
    top: 30,
    left: 30,
    width: 50,
    height: 50,
    borderRadius: 50
  },
  carro: {
    top: 30,
    left: 30,
    width: 50,
    height: 50
  },
  titulo: {
    top: 40,
    left: 0,
    fontSize: 35,
    fontFamily: 'Times New Roma',
    color: 'white'
  },
  subtitulo: {
    top: 10,
    left: 110,
    fontSize: 20,
    fontFamily: 'Times New Roma',
    color: 'white'
  },
  subtitulo2: {
    top: 15,
    left: 110,
    fontSize: 15,
    color: 'white'
  },
  btn: {
    top: 40

  }
});

export default MyDrawer;