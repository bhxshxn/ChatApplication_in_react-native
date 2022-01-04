import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import UserAvatar from 'react-native-user-avatar';


function MsgScreen({ route, navigation }) {
    const { user } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <UserAvatar size={50} name={`${user}`} />
                <Text style={{ color: "#000", width: 220, textAlign: 'center', fontSize: 30 }}>{user}</Text>
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
})
export default MsgScreen
