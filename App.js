import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import InitialNavStack from './screens/InitialNavStack';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {setUser} from './redux/actions/authAction';

const App = ({setUser}) => {
  //check async storage to see if user data exists
   const getMyValue = async () => {
    try {
      const value = await AsyncStorage.getItem('email')
      if(value){
        console.log(`There exists user -> ${value} in the storage`);
        setUser(value)
      }
    } catch(e) {
      // read error
    }
  
    console.log('Done. Logging user')
  
  }
  getMyValue();
  return (
    <NavigationContainer>
      <InitialNavStack />
    </NavigationContainer>
  )
}

export default connect(null,{setUser} ) (App)
