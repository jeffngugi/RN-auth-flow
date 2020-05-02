import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import {login} from '../redux/actions/authAction';
import {connect} from 'react-redux';


const Login = ({navigation, login}) => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //functions
    const userLogin = ()=>{
        if(email === '' || password === ''){
            //Perform data verifications.
            Alert.alert('Credentials required', 'Enter your login details')
        }else{
            const userData = {email, password}
            // console.log(userData)
            login(userData);
        }
    }
    
    return (
        <View style={styles.container}>
          <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          name='email'
          value={email}
          onChangeText={text => setEmail(text)}
        />
         <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          name='password'
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
       

        <Button
          color="#3740FE"
          title="Signin"
          onPress={() => userLogin()}
        />

        <Text style={{marginTop:10}}>Not registered ?</Text>
        <Button
        color="#3740FE"
        title="Register here"
        onPress={() => navigation.navigate('Register')}
      />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        padding:35,
        backgroundColor:'#fff'
    },
    inputStyle:{
        width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
    }

})
// const mapStateToProps = state =>({

// })
export default connect(null, {login}) (Login)
