// Importa las funciones necesarias de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getReactNativePersistence } from 'firebase/auth'; // Asegúrate de importar solo lo necesario de auth
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Configuración de Firebase para la primera app
const firebaseConfig1 = {
  apiKey: "AIzaSyCHEAIIeTs6yzpQQnC23OqGULrQ5_mafDk",
  authDomain: "ab-prueba.firebaseapp.com",
  projectId: "ab-prueba",
  storageBucket: "ab-prueba.appspot.com",
  messagingSenderId: "557163405722",
  appId: "1:557163405722:web:b3e52ba711f74270e09a23"
};

// Configuración de Firebase para la segunda app
const firebaseConfig2 = {
  apiKey: "AIzaSyDzvPV4wjwIcTNNWFpezsVrwJvnsEqighY",
  authDomain: "dc-prueba-55438.firebaseapp.com",
  projectId: "dc-prueba-55438",
  storageBucket: "dc-prueba-55438.appspot.com",
  messagingSenderId: "165616277245",
  appId: "1:165616277245:web:20373052c4936e704a1094",
  measurementId: "G-3K274JPPY5"
};

// Inicializa ambas apps de Firebase
const app1 = initializeApp(firebaseConfig1);
const app2 = initializeApp(firebaseConfig2);

// Configura las instancias de Authentication y Database para la primera app
const auth1 = initializeAuth(app1, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const database1 = getDatabase(app1);

// Configura la instancia de Analytics para la segunda app
const analytics2 = getAnalytics(app2);

// Exporta las instancias necesarias
export { database1 as database, auth1 as auth, analytics2 as analytics };
