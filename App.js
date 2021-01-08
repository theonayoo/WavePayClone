import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './navigation/navigation'

const App =() =>{
  return (
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
  )
}

export default App;
