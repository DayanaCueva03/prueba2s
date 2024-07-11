import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/HistoryScreen';
import OperationScreen from '../screens/OperationScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={ProfileScreen} />
      <Tab.Screen name="Operaciones" component={OperationScreen} />
      <Tab.Screen name="Mi Historial" component={HistoryScreen} />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Banco Pichincha" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}  />
        <Stack.Screen name="Main" component={MainTabs} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
