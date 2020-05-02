import React from 'react';
import { View, Text, Button } from 'react-native';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Login from './Login';
import Register from './Register';

const Stack = createStackNavigator();

const InitialNavStack = ({auth, navigation }) => {
    console.log(auth);  
    const {isAuthenticated} = auth;
    console.log(isAuthenticated);
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
            {!isAuthenticated ?
            <>
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
           
          
            </>
            :
            <Stack.Screen 
                name='Home'
                component={Home}
                options={{title:'Kejalist'}}
            />
}
        </Stack.Navigator>
    )
}

const mapStateToProps = (state) =>({
    auth:state.auth
})

export default connect(mapStateToProps) (InitialNavStack)
