import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Haptics from 'expo-haptics';

import React from 'react'
import { useStore } from '../../services/ZustandModalPassword';
import CloseSvg from '../../../assets/svg/CloseSvg';
import { Dimensions } from 'react-native';

export default function AwardsPrewiew() {
  const modalVisible = useStore(state => state.visibleModalAwards);
  const setModalVisible = useStore(state => state.voidVisibleModalAwards);
  const displayModal = async () => {
    setModalVisible()
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }
  const tasks = useStore(state => state.awardsItem);
  
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'justify-between',
          }}>
            <Text style={{
              display: 'flex',
              flex: 1,
              textAlign: 'center',
              fontFamily: 'Bold',
              color: '#FFFFFF',
              fontSize: 20,
            }}>{tasks.title}</Text>
            <TouchableOpacity style={{ padding: 10 }} onPress={setModalVisible}>
              <CloseSvg />
            </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, alignItems:'center',flexDirection: 'row'}}>
          <Text style={{
            display: 'flex',
            textAlign: 'center',
            fontFamily: 'Regular',
            color: '#FFFFFF',
            fontSize: 16,
          }}>You have completed {tasks.present}% of the task</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: Dimensions.get('window').width - 50,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    borderColor: '#262626',
    borderWidth: 2,
    padding: 20,
  }
})