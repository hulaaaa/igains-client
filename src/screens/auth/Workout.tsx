import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
<<<<<<< HEAD
import { useStore } from '../../services/ZustandModalPassword';

export default function Workout() {
  const selectWorkout = useStore(state => state.selectWorkout);
  // Alert.alert(
  //   ' changes?',
  //   'You have unsaved changes. Are you sure to discard them and leave the screen?',
  //   [
  //     { text: "Don't leave", style: 'cancel', onPress: () => {navigation.dispatch()} },
  //     {
  //       text: 'Discard',
  //       style: 'destructive',
  //       onPress: () => navigation.navigate('Home'),
  //     },
  //   ]
  // );
  return (
    <View style={{flex: 1,backgroundColor: 'black',alignItems:'center'}}>
      <Text style={{color: 'white',fontSize:30,marginTop:40}}>{selectWorkout[3].title}</Text>
=======

export default function Workout() {
  return (
    <View>
      <Text>Workout</Text>
>>>>>>> 3a20f0bc42af0017c948236814669fea45146814
    </View>
  )
}

<<<<<<< HEAD
const styles = StyleSheet.create({

})
=======
const styles = StyleSheet.create({})
>>>>>>> 3a20f0bc42af0017c948236814669fea45146814