import { StatusBar } from 'expo-status-bar';
import React from 'react';
 import { Text, View } from 'react-native';
import MainUser from './screens/MainUser';
import MainAdm from './screens/MainAdm';

import { NavigationContainer } from '@react-navigation/native';
import Nav from './screens/Nav';

import { Routes } from './routes';

export default function App() {
  return (
    
    <NavigationContainer>
      <Nav/>
      <Routes />  
    </NavigationContainer>

  );
}

