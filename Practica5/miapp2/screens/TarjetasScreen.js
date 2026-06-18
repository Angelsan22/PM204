

/* Zona1: Importaciones componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from '../components/Perfil';



/* Zona2: Main - Componentes*/
export default function TarjetasScreen() {
  return (
    
    <View style={styles.container}>

{/*       <Image source={require('./assets/wave.png')}/>
      <Text>Hola Mundo RN</Text>
        <Text>-------------------------------------</Text>
 */}
 {/*      <Saludo />
      <Saludo></Saludo>
        <Text>-------------------------------------</Text>

      <Saludo2/>

        <Text>-------------------------------------</Text> */}
      
      <Perfil 
      style={styles.tarjetaVerde}
      nombre="Sánchez Liares José Ángel" 
      carrera="ISC" 
      materia="Programación Móvil" 
      cuatri="9no"
      />

      <Perfil 
      style={styles.tarjetaRoja}
      nombre="YOOOOOOOOOOOOOOOOOOOO" 
      carrera="Enfermeria" 
      materia="Inmunologia" 
      cuatri="4to"
      />

      <Perfil 
      style={styles.tarjetaVerde}
      nombre="ÑIIIIIAAAAA" 
      carrera="NOSE" 
      materia="Progra" 
      cuatri="5TO"
      />
      
      <StatusBar style="auto" />
    
    </View>

  );
}

/* Zona3: Estilos y Posicionamientos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  tarjetaVerde:{
        backgroundColor: '#6BCB77',
  },
  tarjetaRoja:{
        backgroundColor: '#FF6B6B',
  },
});