import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function LoginLayout() {
  const navigation = useNavigation();
  
  return (
    <View>
      <SafeAreaView>
        <Text>RegisterLayout</Text>
      </SafeAreaView>
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({})