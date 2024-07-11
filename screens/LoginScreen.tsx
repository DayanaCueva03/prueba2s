import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { auth } from '../config/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Main');
    } catch (err: any) {
      if (err instanceof Error) {
        setError(err.message);
        Alert.alert('Error', err.message);
      } else {
        Alert.alert('Error', 'Fallo en el inicio de sesión. Por favor intenta nuevamente.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloo}>Bienvenido de vuelta</Text>

      <TextInput
        style={styles.textin}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.textin}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.buton}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      {error && <Text style={styles.error}>{error}</Text>}

      <View style={styles.footer}>
        <Text style={styles.footerText}>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.footerLink}>Regístrate aquí</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8e2',
    padding: 20,
  },
  tituloo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  textin: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  buton: {
    width: '100%',
    backgroundColor: '#918c03',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  error: {
    marginTop: 10,
    color: 'red',
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#666',
  },
  footerLink: {
    fontSize: 16,
    color: '#007bff',
    marginLeft: 5,
  },
});

