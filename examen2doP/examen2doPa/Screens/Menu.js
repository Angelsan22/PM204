import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import React,{useState} from 'react';
import TarjetaPelicula from './TarjetaPelicula';



export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'switch':
            return <TarjetasScreen/>
        case 'pressable':
            return <SafeAreaScreen/>

        case 'TextInputScreen':
            return <TextInputScreen/>




             case 'menu':
            default:
                return (
                    <View style={styles.container}>

                        <View styles={styles.Button}>
                        <Button title='switch' onPress={() => setScreen('Switch')}/>
                        </View>

                        <View styles={styles.Button}>
                        <Button title='Pressable' onPress={() => setScreen('Pressable')}/>
                        </View>


                        <View styles={styles.Button}>
                        <Button title='Practica TextInput' onPress={() => setScreen('TextInputScreen')}/>
                        </View>



                    <StatusBar style="auto" />
    
                    </View>

                );
    }
}