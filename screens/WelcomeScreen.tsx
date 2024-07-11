import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function WelcomeScreen({ navigation }: any) {
  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      
        <Text style={styles.title}>Bienvenido</Text>
        <Image
          source={{ uri: 'https://as01.epimg.net/diarioas/imagenes/2021/05/18/actualidad/1621365384_747782_1621365586_noticia_normal.jpg' }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>¿Qué deseas hacer hoy?</Text>
        
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>Desarrollado por Dayana Cueva</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfb96',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
    
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#a8a51a',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#4b4a11',  // Cambio de color para el botón de iniciar sesión
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    fontSize: 12,
    color: '#555',
  },
});
