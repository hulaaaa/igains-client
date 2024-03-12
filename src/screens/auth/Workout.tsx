import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useStore } from '../../services/ZustandModalPassword';
import { useNavigation } from '@react-navigation/native';

export default function Workout() {
  const selectedWorkouts = useStore((state) => state.selectWorkout);

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
  const navigation = useNavigation<any>();

  return (
    <View style={{flex: 1,backgroundColor: 'black',alignItems:'center'}}>
      <TouchableOpacity style={{marginTop:40}} onPress={()=>navigation.navigate('SelectWork')}><Text style={{color: 'red',fontSize:30,}}>QUITE</Text></TouchableOpacity>
      {selectedWorkouts.map((item) =>
         (<Text style={{color:'white',fontSize:30}} key={item.id}>{item.title}</Text>)
      )}
    </View>
  )
}

const styles = StyleSheet.create({

})