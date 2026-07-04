import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/caballo.jpg')}
        style={styles.imagen}
      />
      <Text style={styles.texto}>repaso2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  texto: {
    fontSize: 18,
    color: '#333',
  },
});