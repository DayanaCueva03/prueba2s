import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { database } from '../config/config';
import { ref, onValue } from "firebase/database";

type Registro = {
  id: string;
  tipoOperacion: string;
  monto: string;
  observacion: string;
};

export default function HistorialOperaciones() {
  const [registros, setRegistros] = useState<Registro[]>([]);

  useEffect(() => {
    const cargarDatos = () => {
      onValue(ref(database, 'operaciones'), (snapshot) => {
        const data = snapshot.val();
        const registrosArray = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
        setRegistros(registrosArray);
      });
    };

    cargarDatos();
  }, []);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Historial de Operaciones</Text>
      <FlatList
        data={registros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => alert(item.observacion)}>
            <Text style={styles.textoOperacion}>{item.tipoOperacion}</Text>
            <Text style={styles.textoMonto}>{item.monto}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7cf',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  textoOperacion: {
    fontSize: 18,
    fontWeight: '600',
  },
  textoMonto: {
    fontSize: 16,
    color: '#666',
  },
});

