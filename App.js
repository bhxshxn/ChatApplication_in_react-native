import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/Login';
import Register from './src/components/Register';
import ChatList from './src/components/ChatList';
import MsgScreen from './src/components/MsgScreen';


const Stack = createNativeStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="MsgScreen" component={MsgScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
