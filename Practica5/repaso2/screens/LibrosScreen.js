import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Alert,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
} from 'react-native';

export default function LibrosScreen() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [guardando, setGuardando] = useState(false);

  const handleAgregar = () => {
    // Validar que todos los campos estén llenos
    if (titulo.trim() === '' || autor.trim() === '' || genero.trim() === '') {
      Alert.alert('Alert', 'Todos los campos son obligatorios.');
      return;
    }

    setGuardando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo,
        autor,
        genero,
      };
      setLibros((prev) => [...prev, nuevoLibro]);

      setTitulo('');
      setAutor('');
      setGenero('');

      setGuardando(false);

      Alert.alert('Libro guardado correctamente.');
    }, 4000);
  };

  return (
    <ImageBackground
      source={require('../assets/cat.jpg')}
      style={styles.fondo}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Catálogo de Libros</Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          placeholderTextColor="#aaa"
          value={titulo}
          onChangeText={setTitulo}
          editable={!guardando}
        />

        <TextInput
          style={styles.input}
          placeholder="Autor"
          placeholderTextColor="#aaa"
          value={autor}
          onChangeText={setAutor}
          editable={!guardando}
        />

        <TextInput
          style={styles.input}
          placeholder="Género"
          placeholderTextColor="#aaa"
          value={genero}
          onChangeText={setGenero}
          editable={!guardando}
        />

        <Pressable
          style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}
          onPress={handleAgregar}
          disabled={guardando}
        >
          <Text style={styles.botonTexto}>Agregar Libro</Text>
        </Pressable>

        {guardando && (
          <View style={styles.indicadorContenedor}>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={styles.guardandoTexto}>Guardando libro...</Text>
          </View>
        )}

        <Text style={styles.total}>Total de libros: {libros.length}</Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tarjeta}>
              <Text style={styles.libroTitulo}>{item.titulo}</Text>
              <Text style={styles.libroDetalle}>Autor: {item.autor}</Text>
              <Text style={styles.libroDetalle}>Género: {item.genero}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.75)',
    borderRadius: 6,
    padding: 10,
    marginBottom: 8,
    fontSize: 15,
    color: '#000',
  },
  boton: {
    backgroundColor: '#1e6fd9',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
  },
  botonPresionado: {
    opacity: 0.7,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  indicadorContenedor: {
    alignItems: 'center',
    marginVertical: 8,
  },
  guardandoTexto: {
    color: '#fff',
    marginTop: 6,
    fontSize: 14,
  },
  total: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 14,
  },
  tarjeta: {
    backgroundColor: 'rgba(255,255,255,0.88)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  libroTitulo: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 2,
  },
  libroDetalle: {
    fontSize: 13,
    color: '#333',
  },
});