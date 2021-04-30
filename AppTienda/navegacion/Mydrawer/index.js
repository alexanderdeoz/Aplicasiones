import * as React from 'react';
import { View, Text ,StyleSheet ,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen  () {
    return (
        <View style={styles.principal}>
            <Text style={styles.txtBienvenido}>BIENVENIDO FINTECH TIENDAs</Text>

            <TouchableOpacity style={styles.btnTouch} >

                <Text style={styles.goperfil}  >Ir a perfl</Text>

            </TouchableOpacity>

        </View>
    );
}




function Perfilcreen() {
    return (
        <View style={styles.principal}>
            <Text style={styles.txtBienvenido}>Perfil</Text>
        </View>
    );
}


const Stack = createStackNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Perfil" component={Perfilcreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    principal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    txtBienvenido: {
        fontSize: 20
    },

    btnTouch: {
        marginTop: 20,
        width: 200,
        height: 50,
        padding: 10,
        alignItems: 'center',
        borderRadius: 5
    },

    goperfil: {
        color: 'black',
        fontSize: 20
    },

})

export default MyDrawer;