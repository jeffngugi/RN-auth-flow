import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import InitialNavStack from './screens/InitialNavStack';

const App = () => {
  return (
    <NavigationContainer>
      <InitialNavStack />
    </NavigationContainer>
  )
}

export default App
