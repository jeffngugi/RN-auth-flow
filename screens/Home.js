import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux';

const Home = ({auth}) => {
    
    // console.log(auth);
    // console.log(auth.user);
    
    return (
        <View style={styles.container}>
            <Text>This is the home screen</Text>
             <Text style={styles.userWelcome}>Welcome back: {auth.user.email}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        alignContent:'center',
        display:'flex',
        marginHorizontal:12
    },
    userWelcome:{
        fontSize:25,
        fontWeight:'bold',
        paddingVertical:29
    }
})
const mapStateToProps = (state) =>({
    auth:state.auth
})

export default connect(mapStateToProps) (Home)
