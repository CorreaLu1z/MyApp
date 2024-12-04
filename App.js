import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './screens/Inicio';
import Sobre from './screens/Sobre';
import Cliente from './screens/Cliente';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} options={{ title: 'Tela Inicial' }} />
        <Stack.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre Nós' }} />
        <Stack.Screen name="Cliente" component={Cliente} options={{ title: 'Área do Cliente' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
