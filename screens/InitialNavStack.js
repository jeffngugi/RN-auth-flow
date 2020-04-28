import React from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';
import Register from './Register';

const Stack = createStackNavigator();

const InitialNavStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign:'center',
                headerStyle:{
                    backgroundColor:'red'
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold'
                }
            }}
        >
            <Stack.Screen 
                name='Login'
                component={Login}
                options={{title:'Login'}}
            />
            <Stack.Screen 
                name='Register'
                component={Register}
                options={{title:'Register'}}
            />
            <Stack.Screen 
                name='Home'
                component={Home}
                options={{title:'Kejalist'}}
            />
        </Stack.Navigator>
    )
}

export default InitialNavStack
