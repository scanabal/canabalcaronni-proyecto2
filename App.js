import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from '../firebase/config';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import HomeMenu from './src/components/HomeMenu/HomeMenu';

const Stack = createNativeStackNavigator()

function App() {
  const [logueado, setLogueado] = useState(false);

  useEffect(()=> {
    auth.onAuthStateChanged(user => {
      if (user) {
        setLogueado(true)
      } else{
        setLogueado(false)
      }
    })
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {logueado === false
        ? (
        <Stack.Screen name="Login" component={ Login } options={ {headerShown: false} }/>)
        : null}

        {logueado === false
        ? (
        <Stack.Screen name="Register" component={ Register } options={ {headerShown: false} }/> )
        : null}

        {logueado === true 
        ? (
        <Stack.Screen name="HomeMenu" component={ HomeMenu } options={ {headerShown: false} }/> )
        : null}
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App;