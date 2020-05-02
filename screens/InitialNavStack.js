import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {logout} from '../redux/actions/authAction';

import Home from './Home';
import Login from './Login';
import Register from './Register';

const Stack = createStackNavigator();

const InitialNavStack = ({auth, navigation, logout }) => {
    // console.log(auth);  
    const {isAuthenticated} = auth;
    // console.log(isAuthenticated);
    const alertLogout = ()=>{
        Alert.alert(
            'Logging Out',
            'Are you sure you want to log out?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => logout()},
            ],
            {cancelable: false},
          )
    }
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
                options={{
                    title:'App Yangu',
                    headerRight: () => (
                        <Button
                          onPress={()=> alertLogout()}
                          title="logout"
                          color="red"
                        />
                    )
                }}
            />
}
        </Stack.Navigator>
    )
}

const mapStateToProps = (state) =>({
    auth:state.auth
})

export default connect(mapStateToProps, {logout}) (InitialNavStack)
