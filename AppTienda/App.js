import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler'
import Vista from './componentes/view';
import Contador from './componentes/view/incrementador';
import MyDrawer from './navegacion/Mydrawer'

export default function App() {

  return (
    <View style={styles.container}>

      <Contador/>
    </View>
  )


}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerPurple: {
    flex: 1,
    backgroundColor: 'purple'
  },
  containerOrange:
  {
    flex: 1,
    backgroundColor: 'orange'
  }
});

