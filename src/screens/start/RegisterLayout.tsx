import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function RegisterLayout() {
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