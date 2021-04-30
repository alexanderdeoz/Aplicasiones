import * as React from 'react';
import { View, Text, TouchableOpacity ,StyleSheet , Image,TextInput} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import {Card,SocialIcon,Button,Tile} from 'react-native-elements'
import s from './style'



var avatar = require('./imagenes/avatar.png');
var zanahoria = require('./imagenes/zanahoria.jpg');
var aguacate= require('./imagenes/aguacate.jpeg');
var facebook = require('./imagenes/facebook.png');
var fon1=require('./imagenes/fondo1.jpg');


function HomeScreen(props) {
    return (
        <View>     

              <Text style={styles.txt} style={{textAlign:'center' ,fontSize:40}}>TUS PRODUCTOS</Text>              
          <Text style={styles.txt} style={{textAlign:'center' ,fontSize:20}}>Bienvenido Luis</Text>

        
           
        
                 <Card style={{alignItems:'column'}}>
                       <Card.Title>Zanahorias </Card.Title>
                          <Card.Divider/>
                                
                                <Card.Image source={zanahoria}/>
                                <Text style={{marginTop:8}}>Cantidad = 10 unidades</Text>
                                <Text>Precio Adquisicion = 0.10 </Text>
                                <Text>Precio Venta =  0.25</Text>
                 </Card>



                 <Card style={{alignItems:'column'}}>
                       <Card.Title>Aguacate </Card.Title>
                          <Card.Divider/>
                                
                                <Card.Image source={aguacate}/>
                                <Text>Cantidad = 10 unidades</Text>
                                <Text>Precio Adquisicion = 0.10 </Text>
                                <Text>Precio Venta =  0.25</Text>
                 </Card>
             
             
            
           

        </View>
    );
}


function PerfilScreen() {
    return (

        <View style={styles.container}>
             <Text style={styles.txt} >Perfil</Text>             
        </View>
    );
}



function ProductosScreen() {
    return (
        <View style={styles.container}>
             <Text style={styles.txt} > Ingrese Codigo Producto</Text>      

             <TextInput style={s.input}></TextInput>  
             <Card style={{alignItems:'arrow'}}>
             <Button  title="Buscar Producto" />   
             <Button  title="AGRGAR"/>   
             <Button  title="EDITAR"/>   
             <Button  title="ELIMINAR"/> 
             </Card>
               
        </View>
    );
}




function ScanProductScreen() {
    return (

        <View style={styles.container}>
             <Text style={styles.txt} >escanear productos </Text>             
        </View>
    );
}

function LoginScreen(props) {
    return (

        <View style={styles.container}>
         
         <Image source={avatar}  style={s.avatarimg}/>

<Text>Cedula</Text><TextInput {...props} editable maxLength={50} style={s.input}/>    
<Text>Cnfirme contraseña</Text><TextInput {...props} editable maxLength={50} style={s.input}/>    
           
<TouchableOpacity style={styles.btnPerfil} onPress={() => props.navigation.navigate('Home')} >
    
    <Text style={styles.txtPerfil}>
       
        Ingresar
      </Text>

</TouchableOpacity>   

<TouchableOpacity style={styles.btnPerfil} onPress={() => props.navigation.navigate('Salirscreen')} >
    
    <Text style={styles.txtPerfil}>
       
        Salir
      </Text>

</TouchableOpacity>   

        </View>
    );
}
function Registrarse(props) {
    return (

        <View style={styles.container}>
             <Text style={styles.txt} >REGISTRATE</Text>   


    
    <Card >

    <TouchableOpacity  >

    <SocialIcon
    style={{height:70 ,width:280}}
             title='Registrate con Facebook'
             button
             type='facebook'
             />
               
           </TouchableOpacity>
    
           <TouchableOpacity  >

<SocialIcon
style={{height:70 ,width:280}}
         title='Registrate con Facebook'
         button
         type='linkedin'

         />
           
       </TouchableOpacity>
    
           <TouchableOpacity  >

<SocialIcon
style={{height:70 ,width:280}}
         title='Registrate con Facebook'
         button
         type='google'
         />
           
       </TouchableOpacity>
   
      </Card>

      

           <TouchableOpacity style={styles.btnPerfil} onPress={() => props.navigation.navigate('Cerrar Secion')} >
               
               <Text style={styles.txtPerfil}>
                   Regresar
                 </Text>

           </TouchableOpacity>   


        </View>
    );
}
function Salirscreen(props) {
    return (

        <View style={styles.container}>
             <Image source={avatar} style={s.avatarimg} />

            <Text style={styles.txt}>
                
                Bienvenido  a Fintech 

                </Text>
            <TouchableOpacity style={styles.btnPerfil} onPress={() => props.navigation.navigate('Login')} >
               
                <Text style={styles.txtPerfil}>
                   
                    Iniciar seccion
          
                  </Text>

            </TouchableOpacity>    

            <TouchableOpacity style={styles.btnPerfil} onPress={() => props.navigation.navigate('Registrarse')} >
               
               <Text style={styles.txtPerfil}>
                  
                   Registrate
         
                 </Text>

           </TouchableOpacity>          

        </View>
    );
}
//const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();



 function MyDrawer() {
    return (

        <NavigationContainer>

 <Drawer.Navigator>

        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Perfil" component={PerfilScreen} />
        <Drawer.Screen name="Escanear Productos" component={ScanProductScreen}/>
        <Drawer.Screen name="Productos" component={ProductosScreen}/>
        <Drawer.Screen name="Registrarse" component={Registrarse} />
        <Drawer.Screen name="Cerrar Secion" component={Salirscreen}/>
        <Drawer.Screen name="Login" component={LoginScreen}/>
    </Drawer.Navigator>

        </NavigationContainer>
   
      )
}

const styles = StyleSheet.create({

btnPerfil:{
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: '#ff5204',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5
},

txt:{ 
    fontSize: 20 
},

container:{ 
    flex: 1,
     alignItems: 'center', 
     justifyContent: 'center' 
    },
    txtPerfil:{
         color: '#fff', 
    fontSize: 20
 }
})

export default  MyDrawer;

