import { Dimensions, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Tabs from '../../components/Tabs'
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HeaderText from '../../components/HeaderText';
import { StatusBar } from 'expo-status-bar';
import BellAlertIcon from '../../../assets/svg/BellAlertIcon';
import * as Haptics from 'expo-haptics';
import CalBurnIcon from '../../../assets/svg/CalBurnIcon';
import SpendTimIcon from '../../../assets/svg/SpendTimIcon';
import TotalTrainIcon from '../../../assets/svg/TotalTrainIcon';

SplashScreen.preventAutoHideAsync();

export default function Stat() {
  const [refreshing, setRefreshing] = useState(false);
  const [activeToday, setActiveToday] = useState('Today')

  const [fontsLoaded, fontError] = useFonts({
    'Regular': require('../../../assets/fonts/regular.otf'),
    'RegularItalic': require('../../../assets/fonts/regular-italic.otf'),
    'Light': require('../../../assets/fonts/light.otf'),
    'LightItalic': require('../../../assets/fonts/light-italic.otf'),
    'Bold': require('../../../assets/fonts/bold.otf'),
    'BoldItalic': require('../../../assets/fonts/bold-italic.otf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  }
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 800);
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <SafeAreaView >
        <ScrollView refreshControl={<RefreshControl tintColor={'#E0FE10'} refreshing={refreshing} onRefresh={onRefresh}/>} showsVerticalScrollIndicator={false}>
          {/* HEADER */}
          <View style={styles.header_search}>
            <HeaderText first="Statistics" second={<BellAlertIcon/>} />
          </View>

          {/* SELECT DAY'S */}
          <View style={styles.divtasks}>
            <TouchableOpacity onPress={()=>{setActiveToday('Today'), Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}} style={activeToday==='Today'?{
              backgroundColor: '#FFFFFF',
              borderColor: '#272727',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingVertical: 10,
            }:{
              backgroundColor: '#1E1E1E',
              borderColor: '#272727',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingVertical: 10,}}>
              <Text style={activeToday==='Today'?{ color: '#1E1E1E', fontFamily: 'Light', fontSize: 14 }:{color: '#FFFFFF', fontFamily: 'Light', fontSize: 14}}>Today</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setActiveToday('Weekly'),Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}} style={activeToday==='Weekly'?{
              backgroundColor: '#FFFFFF',
              borderColor: '#272727',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingVertical: 10,
            }:{
              backgroundColor: '#1E1E1E',
              borderColor: '#272727',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingVertical: 10,}}>
              <Text style={activeToday==='Weekly'?{ color: '#1E1E1E', fontFamily: 'Light', fontSize: 14 }:{color: '#FFFFFF', fontFamily: 'Light', fontSize: 14}}>Weekly</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setActiveToday('Monthly'),Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}} style={activeToday==='Monthly'?{
              backgroundColor: '#FFFFFF',
              borderColor: '#272727',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingVertical: 10,
            }:{
              backgroundColor: '#1E1E1E',
              borderColor: '#272727',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingVertical: 10,}}>
              <Text style={activeToday==='Monthly'?{ color: '#1E1E1E', fontFamily: 'Light', fontSize: 14 }:{color: '#FFFFFF', fontFamily: 'Light', fontSize: 14}}>Monthly</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setActiveToday('All time'), Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}} style={activeToday==='All time'?{
              backgroundColor: '#FFFFFF',
              borderColor: '#272727',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingVertical: 10,
            }:{
              backgroundColor: '#1E1E1E',
              borderColor: '#272727',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingVertical: 10,}}>
              <Text style={activeToday==='All time'?{ color: '#1E1E1E', fontFamily: 'Light', fontSize: 14 }:{color: '#FFFFFF', fontFamily: 'Light', fontSize: 14}}>All Time</Text>
            </TouchableOpacity>
          </View>

          {/* STATISTICS */}
          <View style={styles.statDiv}>
            <View style={{backgroundColor: '#17181B',width: '32%', aspectRatio: 1/1, justifyContent:'center', borderRadius: 10,alignItems:'center', gap: 12}}>
              <CalBurnIcon />
              <View style={{alignItems:'center', gap: 5}}>
                <Text style={{
                  fontFamily: 'Bold',
                  fontSize: 20,
                  color: 'white',
                }}>
                  1.105
                </Text>
                <Text style={{
                  fontFamily: 'Light',
                  fontSize: 12,
                  color: 'rgba(255, 255, 255, 0.5)',
                }}>
                  CAL BURN
                </Text>
              </View>
            </View>

            <View style={{backgroundColor: '#17181B', width: '32%',aspectRatio: 1/1, justifyContent:'center', borderRadius: 10,alignItems:'center', gap: 12}}>
              <SpendTimIcon/>
              <View style={{alignItems:'center', gap: 5}}>
                <Text style={{
                  fontFamily: 'Bold',
                  fontSize: 20,
                  color: 'white',
                }}>
                  7,2
                </Text>
                <Text style={{
                  fontFamily: 'Light',
                  fontSize: 12,
                  color: 'rgba(255, 255, 255, 0.5)',
                }}>
                  HOURS SPEND
                </Text>
              </View>
            </View>

            <View style={{backgroundColor: '#17181B',width: '32%', aspectRatio: 1/1,justifyContent:'center',borderRadius: 10,alignItems:'center', gap: 12}}>
              <TotalTrainIcon />
              <View style={{alignItems:'center', gap: 5}}>
                <Text style={{
                  fontFamily: 'Bold',
                  fontSize: 20,
                  color: 'white',
                }}>
                  34
                </Text>
                <Text style={{
                  fontFamily: 'Light',
                  fontSize: 12,
                  color: 'rgba(255, 255, 255, 0.5)',
                }}>
                  TOTAL TRAINING
                </Text>
              </View>
            </View>
          </View>


        </ScrollView>
      </SafeAreaView>
      <Tabs />
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#06070A'
  },
  header_search: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 25,
    marginTop: 20,
    width: Dimensions.get('window').width - 50,
  },
  divtasks: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    width: Dimensions.get('window').width - 50,
  },
  statDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    width: Dimensions.get('window').width - 50,
  }
})