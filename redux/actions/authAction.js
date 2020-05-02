import {LOGIN, SET_USER, LOGOUT, REGISTER} from './type';
import AsyncStorage from '@react-native-community/async-storage';

export const login = (userData) => async dispatch => {
    //check if user exist in database
        //if true, dispatch LOGIN
        //then, add user to async storage
    const {email} = userData;
    //set token or whatever you want to store into async storage
    setValue(email)
   if(userData !== null){
       dispatch({
           type:LOGIN,
           payload:userData
       })
   }
}

//set current user 
export const setUser = (username)=>{
    //write code to perform logic to set current user
    const userData = {};
    userData.email = username;
    userData.password ='password';
    return{
        type:SET_USER,
        payload:userData
    }
}

export const registerUser = (userData) => async dispatch =>{
    try {
        //Write code to perform your registration with server here
        //then dispatch here
        dispatch({
            type:REGISTER,
            payload:userData
        })
    } catch (error) {
        
    }
}

//Logout user
export const logout = () => async dispatch => {
    //remove async key from the storage
    try {
        await AsyncStorage.removeItem('email')
        .then(
            dispatch({
                type:LOGOUT
            })
        )
    } catch (err) {
        console.log(err)
    }
}

//local functions
const setValue = async (email) =>{
    try {
        await AsyncStorage.setItem('email', email);
    } catch (error) {
        
    }
}