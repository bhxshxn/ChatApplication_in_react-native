import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import axios from "axios";


function ChatList({ navigation }) {
    const [list, setlist] = useState([]);
    const [name, setname] = useState("");
    const [search, setsearch] = useState("");
    const getList = async () => {
        const snapshot = await axios.get(`http://whatsapp-reactp.herokuapp.com/getChats/${name}`)
        if (snapshot.data.length != 0) {
            setlist(snapshot.data[0].convos)
        } else {
            var arr = ["U need friends"]
            setlist(arr)
        }
    }
    const checkUser = async () => {
        try {
            const value = await AsyncStorage.getItem('@user')
            if (value !== null) {
                setname(value)
                getList()
                return (value)
            } else {
                navigation.dispatch(
                    StackActions.replace('Login')
                );
            }
        } catch (e) {
            console.log(e)
            navigation.dispatch(
                StackActions.replace('Login')
            );
            return (value)
        }
    }
    const logout = async () => {
        try {
            await AsyncStorage.removeItem('@user')
            navigation.dispatch(
                StackActions.replace('Login')
            );
            console.log(`${name} Logged Out`)
        } catch (e) {
            console.log(e)
        }
    }
    const user = checkUser();
    // useEffect(() => {
    //     console.log('called')
    // }, [])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { logout() }}><View style={styles.avatar}><UserAvatar size={50} name={`${name}`} /></View>
                </TouchableOpacity>
                <TextInput
                    placeholder='Search'
                    value={search}
                    onChangeText={setsearch}
                    style={styles.input}
                    placeholderTextColor="#000"
                ></TextInput>
            </View>
            <View style={styles.chatList}>
                <ScrollView style={{ height: '90%' }}>
                    {list && list.map(item => (
                        <TouchableOpacity key={list.indexOf(`${item}`)} onPress={() => navigation.navigate('MsgScreen', { user: item })}>
                            <View style={styles.listMember}><UserAvatar size={45} name={`${item}`} />
                                <Text style={styles.listText}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    input: {
        height: 40,
        width: 220,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
        color: '#000'
    },
    chatList: {
        margin: 10,
        padding: 5
    },
    listMember: {
        flexDirection: 'row',
        margin: 5,
        padding: 5
    },
    listText: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        width: '75%',
        justifyContent: 'center'
    }
})
export default ChatList
