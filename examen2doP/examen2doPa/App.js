import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TarjetaPelicula } from './Screens/TajetaPelicula';

export default function App() {
  return (
    
    <View style={styles.container}>


      <Text>Examen</Text>
        <Text>-------------------------------------</Text>
      
      <TarjetaPelicula
        Titulo="Sherek" 
        Genero="Comedia" 
        Pelicula="Sherek" 
      />

      <TarjetaPelicula
        Titulo="Minions" 
        Genero="Comedia" 
        Pelicula="Minions" 
      />

      <TarjetaPelicula
        Titulo="Sapace yam" 
        Genero="Comedia" 
        Pelicula="Sapace yam" 
      />
      
      <StatusBar style="auto" />
    
    </View>

  );
}

const styles = StyleSheet.create({
    alignItems: 'center',
    justifyContent: 'center',
  },
);