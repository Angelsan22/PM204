import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';

export default function ActualizarUsuario() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const [nombre, setNombre] = useState(params.nombre || '');
  const [edad, setEdad] = useState(params.edad || '');

  const guardarCambios = async () => {
    if (!nombre || !edad) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    try {
      const response = await fetch(`http://192.168.100.14:5000/v1/usuarios/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('admin:1234')
        },
        body: JSON.stringify({ nombre, edad: parseInt(edad, 10) })
      });

      if (response.ok) {
        Alert.alert('Éxito', 'Actualizado correctamente', [
          { text: 'OK', onPress: () => router.push('/(tabs)/consulta') }
        ]);
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.detail || 'No se pudo actualizar');
      }
    } catch (error) {
      console.log('Error actualizando usuario:', error);
      Alert.alert('Error', 'Error en la conexión');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Actualizar Usuario', headerShown: true }} />

      <View style={styles.formCard}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Nombre del usuario"
        />

        <Text style={styles.label}>Edad</Text>
        <TextInput
          style={styles.input}
          value={edad.toString()}
          onChangeText={setEdad}
          placeholder="Edad"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={guardarCambios}>
          <Text style={styles.buttonText}>Guardar cambios</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    color: '#1F2937',
  },
  button: {
    backgroundColor: '#FACC15', // Yellow
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 16,
  },
});
