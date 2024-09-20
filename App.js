import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Leitor from './src/pages/Leitor';
import Home from './src/pages/Home';
import Consulta from './src/pages/Consulta';

export default function App() {
  const stackNavigation = createNativeStackNavigator()

  return (

    <NavigationContainer>
      <stackNavigation.Navigator>
        <stackNavigation.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <stackNavigation.Screen name='Leitor' component={Leitor} options={{ headerShown: false }} />
        <stackNavigation.Screen name='Consulta' component={Consulta} options={{ headerShown: false }} />
      </stackNavigation.Navigator>
    </NavigationContainer>

  );
}