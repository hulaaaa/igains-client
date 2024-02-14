import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashStart from '../screens/start/SplashStart'
  
const Stack = createNativeStackNavigator()
export default function StartRouterStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen options={{animation: 'none'}} name="Start" component={SplashStart} />
    </Stack.Navigator>
  )
}
const styles = StyleSheet.create({})