import React,{useState,useEffect} from 'react';
import {View,Text,TextInput,StyleSheet, TouchableOpacity, Button} from 'react-native';


function Register({navigation}) {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const register=()=>{

    }
    return (
        <View style={styles.conatiner}>
            <Text style={{color:'#000',fontSize:25,margin:10}}>Chat_O_Pat</Text>
            <Text style={{color:'#000',fontSize:20}}>Register</Text>
            <View style={styles.inputBox}>
                <TextInput
                placeholder='Username'
                value={username}
                onChangeText={setusername}
                style={styles.input}
                placeholderTextColor="#000" 
                >
                </TextInput>
                <TextInput
                placeholder='Password'
                value={password}
                onChangeText={setpassword}
                style={styles.input}
                placeholderTextColor="#000" 
                >
                </TextInput>
            </View>
            <View style={styles.linkLine}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}><Text style={{color:'#000'}}>Login.</Text></TouchableOpacity>
            </View>
            <View style={styles.parent}>
                <Button title='Register'onPress={register}></Button>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    conatiner:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
    },
    input:{
        height: 40,
        width:220,
        margin:12,
        borderWidth: 1,
        padding: 10,
        textAlign:'center',
        color:'#000'
    },
    linkLine:{
        flexDirection:'row',
        width:'75%',
        justifyContent:'space-evenly',
        margin:5
    },
    parent:{
        width:220,
        margin:10
    }
})

export default Register
