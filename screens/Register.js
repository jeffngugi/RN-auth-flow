import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';




const Register = ({navigation}) => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    //functions
    const userRegister = ()=>{
      //Perform verications->white verification logics here
        if(name == '' || email === '' || password === ''){
            Alert.alert('Credentials required', 'Enter your ')
        }else{
            console.log({email, password, name})
            //write codes to see if user was registered
            //then if succesfull
            navigation.navigate('Login')
            
        }
    }
    
    return (
        <View style={styles.container}>
         <TextInput
          style={styles.inputStyle}
          placeholder="Full names"
          name='name'
          value={name}
          onChangeText={text => setName(text)}
        />
        
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
          title="Register"
          onPress={() => userRegister()}
        />

        <Text style={{marginTop:10}}>Registered ?</Text>
        <Button
        color="#3740FE"
        title="Login here"
        onPress={() => navigation.navigate('Login')}
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

export default Register;
