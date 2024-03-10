import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import { AppProvider, } from './store/context/SecondContext';
import { AuthProvider, } from './store/context/AuthContext';

import Home from './src/Home'
import Contact from './src/Contact'
import Pdff from './src/Pdf'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <AppProvider>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Contact' component={Contact} />
            <Stack.Screen name='Pdff' component={Pdff} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
