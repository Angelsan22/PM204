import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';

export default function DetallesUsuario() {
  const router = useRouter();
  const { id, nombre, edad } = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);

  const eliminarUsuario = async () => {
    try {
      const response = await fetch(`http://192.168.100.14:5000/v1/usuarios/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Basic ' + btoa('admin:1234')
        }
      });

      if (response.ok) {
        setModalVisible(false);
        router.back();
      } else {
        Alert.alert('Error', 'No se pudo eliminar el usuario');
      }
    } catch (error) {
      console.log('Error al eliminar usuario:', error);
      Alert.alert('Error', 'Error en la conexión');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Detalle del usuario', headerShown: true }} />

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.value}>{nombre}</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Edad</Text>
        <Text style={styles.value}>{edad} años</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.actualizarBtn]}
          onPress={() => router.push({ pathname: '/actualizar/[id]', params: { id, nombre, edad } })}
        >
          <Text style={styles.buttonText}>Actualizar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.eliminarBtn]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Confirmar eliminación</Text>
            <Text style={styles.modalText}>¿Eliminar al usuario {nombre}?</Text>
            
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalBtn, styles.cancelarBtn]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalBtnTextBlack}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalBtn, styles.confirmarEliminarBtn]}
                onPress={eliminarUsuario}
              >
                <Text style={styles.modalBtnTextWhite}>Sí, eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    elevation: 2,
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    gap: 15,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: '60%',
    alignItems: 'center',
  },
  actualizarBtn: {
    backgroundColor: '#FACC15', // Yellow
  },
  eliminarBtn: {
    backgroundColor: '#EF4444', // Red
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EF4444',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#4B5563',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cancelarBtn: {
    backgroundColor: '#E5E7EB',
  },
  confirmarEliminarBtn: {
    backgroundColor: '#EF4444',
  },
  modalBtnTextBlack: {
    color: '#1F2937',
    fontWeight: '600',
  },
  modalBtnTextWhite: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
