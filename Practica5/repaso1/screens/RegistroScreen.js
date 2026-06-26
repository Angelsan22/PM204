import React, { useState } from 'react';
import {View, Text, TextInput, Switch, TouchableOpacity, Alert, StyleSheet,} from 'react-native';

export default function RegistroScreen() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const handleEnviar = () => {
    if (nombre.trim() === '' || carrera.trim() === '' || semestre.trim() === '') {
      Alert.alert('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    if (isNaN(semestre)) {
      Alert.alert('Error', 'El semestre debe ser un número.');
      return;
    }

    Alert.alert(
      'Registro enviado',
      `Nombre: ${nombre}\n` +
      `Carrera: ${carrera}\n` +
      `Semestre: ${semestre}\n\n` +
      `Taller: ${taller ? 'Sí' : 'No'}\n` +
      `Constancia: ${constancia ? 'Sí' : 'No'}\n` +
      `Deportes: ${deportes ? 'Sí' : 'No'}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      <TextInput
        style={styles.input}
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
        keyboardType="numeric"
      />

      <Text style={styles.subtitulo}>Opciones</Text>

      <View style={styles.opcionFila}>
        <Text style={styles.opcionTexto}>¿Asistirá al taller?</Text>
        <Switch value={taller} onValueChange={setTaller} />
      </View>

      <View style={styles.opcionFila}>
        <Text style={styles.opcionTexto}>¿Requiere constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia} />
      </View>

      <View style={styles.opcionFila}>
        <Text style={styles.opcionTexto}>¿Participará en actividades deportivas?</Text>
        <Switch value={deportes} onValueChange={setDeportes} />
      </View>

      <TouchableOpacity style={styles.boton} onPress={handleEnviar}>
        <Text style={styles.botonTexto}>Enviar Registro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  opcionFila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  opcionTexto: {
    fontSize: 15,
    flex: 1,
    marginRight: 10,
  },
  boton: {
    backgroundColor: '#1e6fd9',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});