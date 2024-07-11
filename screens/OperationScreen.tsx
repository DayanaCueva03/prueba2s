import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import { database } from '../config/config';
import { ref, push } from "firebase/database";

export default function Operacion() {
  const [operationId, setOperationId] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [operationType, setOperationType] = useState('');
  const [operationComment, setOperationComment] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleSaveOperation = async () => {
    if (operationId === '' || amountValue === '' || operationType === '') {
      setMessage('Por favor complete todos los campos');
      return;
    }

    const amount = parseFloat(amountValue);

    if (amount > 500) {
      Alert.alert('Advertencia', 'Las transacciones mayores a $500 están prohibidas.', [{ text: 'OK' }]);
      return;
    }

    if (amount < 5) {
      Alert.alert(
        'Confirmación',
        `¿Estás seguro de realizar una transacción por $${amount.toFixed(2)}?`,
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Aceptar', onPress: () => saveOperation(amount) }
        ]
      );
    } else {
      saveOperation(amount);
    }
  };

  const saveOperation = async (amount: number) => {
    const newOperation = {
      id: operationId,
      amount: amount.toFixed(2),
      tipo: operationType,
      comentario: operationComment,
      timestamp: new Date().getTime(),
    };

    try {
      await push(ref(database, 'operaciones'), newOperation);
      setMessage('Operación guardada exitosamente');
      setOperationId('');
      setAmountValue('');
      setOperationType('');
      setOperationComment('');
    } catch (error) {
      setMessage('Error al guardar la operación. Por favor, inténtelo nuevamente.');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://static.vecteezy.com/system/resources/previews/008/128/803/non_2x/abstract-blue-background-of-bank-building-and-pile-of-money-cash-with-world-map-vector.jpg' }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Registro de Operación</Text>
        
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3635/3635995.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
        
        <TextInput
          style={styles.input}
          placeholder="ID de la Operación"
          value={operationId}
          onChangeText={setOperationId}
        />
        <TextInput
          style={styles.input}
          placeholder="Monto"
          value={amountValue}
          onChangeText={setAmountValue}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Tipo de operación"
          value={operationType}
          onChangeText={setOperationType}
        />
        <TextInput
          style={[styles.input, styles.commentInput]}
          placeholder="Comentario"
          value={operationComment}
          onChangeText={setOperationComment}
          multiline
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSaveOperation}
        >
          <Text style={styles.buttonText}>Ejecutar</Text>
        </TouchableOpacity>

        {message && <Text style={styles.message}>{message}</Text>}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f1c5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  commentInput: {
    height: 80,
    paddingTop: 10,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#9d9807',
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  message: {
    marginTop: 10,
    color: '#062eb2',
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
});
