import React from 'react'; 
//componente de funcion
import {View,StyleSheet,Text} from 'react-native';

function Vista(){
    return(
        <View style={styles.container}>
        <Text>hola </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        height:45,
        width:100
    }
})

export default Vista;