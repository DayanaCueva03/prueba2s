import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const ProfileScreen = () => {
  const [name, setName] = useState('');



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Banco Pichincha</Text>
      
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Productos"
      />

      <Text style={styles.message}> Usuario: Dayana Cueva </Text>
      <Text style={styles.message}> Cuenta: 12547896324875 </Text>


      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>💲</Text>
          </TouchableOpacity>
          <Text style={styles.buttonDescription}>Transferir dinero</Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>🚿</Text>
          </TouchableOpacity>
          <Text style={styles.buttonDescription}>Pagar Servicios</Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>💳</Text>
          </TouchableOpacity>
          <Text style={styles.buttonDescription}>Pagar Tarjetas</Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>🏦</Text>
          </TouchableOpacity>
          <Text style={styles.buttonDescription}>Todas las operaciones</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Información</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fafac6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#a4a40e',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    color: '#333',
  },
  message: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    color: '#666',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#909009',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    width: '48%', // Ajustar el ancho según necesidades
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonDescription: {
    color: '#333',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#5b5b00',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
