/* Zona1: Importaciones componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroungScreen from './ImageBackgroungScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import ModalScreen from './ModalScreen';






/* Zona2: Main - Componentes*/
export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>
        case 'safeArea':
            return <SafeAreaScreen/>
         case 'PressableScreen':
            return <PressableScreen/>
        case 'TextInputScreen':
            return <TextInputScreen/>
        case 'FlatListScreen':
            return <FlatListScreen/>
        case 'ImageBackgroungScreen':
            return <ImageBackgroungScreen/>
        case 'ActivityIndicatorScreen':
            return <ActivityIndicatorScreen/>
        case 'ModalScreen':
            return <ModalScreen/>


        case 'menu':
            default:
                return (
                    <View style={styles.container}>

                        <View styles={styles.Button}>
                        <Button title='Practica Tarjetas' onPress={() => setScreen('tarjetas')}/>
                        </View>

                        <View styles={styles.Button}>
                        <Button title='Practica SafeArea' onPress={() => setScreen('safeArea')}/>
                        </View>

                        <View styles={styles.Button}> 
                        <Button title='Practica Pressable' onPress={() => setScreen('PressableScreen')}/>
                        </View>

                        <View styles={styles.Button}>
                        <Button title='Practica TextInput' onPress={() => setScreen('TextInputScreen')}/>
                        </View>

                        <View styles={styles.Button}>
                        <Button title='Practica FlatList' onPress={() => setScreen('FlatListScreen')}/>
                        </View>

                        <View styles={styles.Button}>
                        <Button title='Practica ImageBackground' onPress={() => setScreen('ImageBackgroungScreen')}/>
                        </View>

                        <View styles={styles.Button}>
                        <Button title='Practica ActivityIndicator' onPress={() => setScreen('ActivityIndicatorScreen')}/>
                        </View>

                        <View styles={styles.Button}>
                        <Button title='Practica Model' onPress={() => setScreen('ModelScreen')}/>
                        </View>


                    <StatusBar style="auto" />
    
                    </View>

                );
    }
}

/* Zona3: Estilos y Posicionamientos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'colum-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boton: {
    padding:10,
    margin:15,
  }

});