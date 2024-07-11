import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, Image } from 'react-native';
import { auth } from '../config/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Registrousuarios({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [contacto, setContacto] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    if (email === '' || password === '' || user === '' || contacto === '') {
      Alert.alert('Error','Por favor, complete todos los campos requeridos');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Mensaje', 'Registro Exitoso');
      navigation.navigate('Login');
    } catch (err: any) {
      if (err instanceof Error) {
        setError(err.message);
        Alert.alert('Error', err.message);
      } else {
        Alert.alert('Error', 'Fallo el registro');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registrarse</Text>

      <Image
        source={{ uri: 'https://cdn-icons-png.freepik.com/512/5087/5087579.png' }}
        style={styles.imagen}
        resizeMode="contain"
      />

      <TextInput
        style={styles.otro}
        placeholder="Ingrese su correo"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.otro}
        placeholder="Ingrese su contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.otro}
        placeholder="Ingrese su usuario"
        value={user}
        onChangeText={setUser}
      />

      <TextInput
        style={styles.otro}
        placeholder="Ingrese su numero de celular"
        value={contacto}
        onChangeText={setContacto}
        keyboardType="numeric"
      />

      <Button
        title="Registrarse"
        onPress={handleRegister}
        color="#4e4c04"
      />

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#d4d102',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  imagen: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  otro: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f0f0f0',
    width: '100%',
  },
  error: {
    marginTop: 10,
    color: 'red',
    textAlign: 'center',
  },
});
