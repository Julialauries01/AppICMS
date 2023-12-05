import { StatusBar } from 'expo-status-bar';
import React from 'react';
 import { Text, View } from 'react-native';
import MainUser from './screens/MainUser';
import MainAdm from './screens/MainAdm';

import { NavigationContainer } from '@react-navigation/native';
import Nav from './screens/Nav';

import { Routes } from './routes';
import { ProductsContextContainer } from './contexts/productscontext';

export default function App() {
  return (
    
    <NavigationContainer>
      <ProductsContextContainer>
        <Nav/>
        <Routes />  
      </ProductsContextContainer>
    </NavigationContainer>

  );
}

