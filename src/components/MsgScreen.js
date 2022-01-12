import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import KeyboardStickyView from 'rn-keyboard-sticky-view';


function MsgScreen({ route, navigation }) {
    const [msg, setmsg] = useState("")
    const [msgList, setMsgList] = useState([])
    const { to, from } = route.params;
    const sendMessage = async (e) => {
        await axios.post('http://whatsapp-reactp.herokuapp.com/messages/new', {
            message: input,
            to: to,
            timestamp: new Date().toLocaleString(),
            from: from
        });

    }

    useEffect(() => {
        const getMsg = async () => {
            await axios.post('http://whatsapp-reactp.herokuapp.com/getMessages', {
                user: from, name: to
            }).then(result => {
                console.log(result.data)
                setMsgList(result.data)

            }).catch(err => console.log(err))
        }
        getMsg();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <UserAvatar size={50} name={`${to}`} />
                <Text style={{ color: "#000", width: 220, textAlign: 'center', fontSize: 30 }}>{to}</Text>
            </View>
            <View style={styles.msgBody}>
                {/* {msgList.map((item) => (
                    <Text style={{ color: '#000' }}>{item.message}</Text>
                ))} */}
                <View>
                    <Text style={styles.from}>Vivek</Text>
                    <Text style={styles.msg}>Kaisa Hai?</Text>
                    <Text style={styles.time}>6/3/2021, 4:44:49 PM</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <TextInput
                    placeholder='Type...'
                    value={msg}
                    onChangeText={setmsg}
                    style={styles.input}
                    placeholderTextColor="#000"></TextInput>
                <View style={{ height: 40 }}>
                    <Button title='send' ></Button>
                </View>
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
    msgBody: {
        height: '83%',
        backgroundColor: '#fff',
        margin: 10
    },
    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
        color: '#000'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    keyboardView: {
        display: 'flex',
        width: '75%',
        height: 50
    },
    from: {
        color: '#000'
    },
    msg: {
        color: '#000'
    },
    time: {
        color: '#000'
    }
})
export default MsgScreen
