import moment from 'moment';
import { Alert, Dimensions, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Tabs from '../../components/Tabs'
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Animated from 'react-native-reanimated';
import HeaderText from '../../components/HeaderText';
import { StatusBar } from 'expo-status-bar';
import GymIcon from '../../../assets/svg/SportIcon/GymIcon';
import { Path, Svg } from 'react-native-svg';

SplashScreen.preventAutoHideAsync();

export default function Planer() {
  const [fontsLoaded, fontError] = useFonts({
    'Regular': require('../../../assets/fonts/regular.otf'),
    'RegularItalic': require('../../../assets/fonts/regular-italic.otf'),
    'Light': require('../../../assets/fonts/light.otf'),
    'LightItalic': require('../../../assets/fonts/light-italic.otf'),
    'Bold': require('../../../assets/fonts/bold.otf'),
    'BoldItalic': require('../../../assets/fonts/bold-italic.otf'),
  });
  const [refreshing, setRefreshing] = useState(false);
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
  
  let calendarData = []
  let calendarDataMonth = []
  const [activeDay, setActiveDay] = useState(moment().format('DD'));
  const [selectI, setSelectI] = useState(0)
  let repeatLoop = 0
  for(let i = 0; i <= 2; i++){
    const fourMonth = moment().add(i, 'month').calendar({sameDay: 'YYYY-MM',nextDay: 'YYYY-MM',nextWeek: 'YYYY-MM',lastDay: 'YYYY-MM',lastWeek: 'YYYY-MM',sameElse: 'YYYY-MM'})
    const countDay = moment(fourMonth, "YYYY-MM").daysInMonth();
    repeatLoop=countDay+repeatLoop
  }
  for(let k = 0; k <= repeatLoop; k++){
      calendarData.push({
        date: moment().add(k, 'day').calendar({
          sameDay: 'DD',
          nextDay: 'DD',
          nextWeek: 'DD',
          lastDay: 'DD',
          lastWeek: 'DD',
          sameElse: 'DD'
        }),
        month: moment().add(k, 'day').calendar({
          sameDay: 'MMMM',
          nextDay: 'MMMM',
          nextWeek: 'MMMM',
          lastDay: 'MMMM',
          lastWeek: 'MMMM',
          sameElse: 'MMMM'
        }),
        day: moment().add(k, 'day').calendar({
          sameDay: 'ddd',
          nextDay: 'ddd',
          nextWeek: 'ddd',
          lastDay: 'ddd',
          lastWeek: 'ddd',
          sameElse: 'ddd'
        }),
      })
  }
  for(let j = 0; j < 3; j++){
    calendarDataMonth.push({
      month: moment().add(j, 'month').calendar({
        sameDay: 'MMMM',
        nextDay: 'MMMM',
        nextWeek: 'MMMM',
        lastDay: 'MMMM',
        lastWeek: 'MMMM',
        sameElse: 'MMMM'
      })
    })
  }
  const [selectedMonth, setSelectedMonth] = useState(calendarDataMonth[selectI].month)


  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <SafeAreaView>
        <ScrollView refreshControl={<RefreshControl tintColor={'#E0FE10'}refreshing={refreshing}onRefresh={onRefresh}/>} >
          {/* HEADER */}
          <View style={styles.header_search}>
            <HeaderText first="Calendar" second={null} />
          </View>

          {/* HEADER PLANER */}
          <View style={styles.headerPlaner}>
            <View 
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              width: Dimensions.get('window').width - 50,
            }}>
              {
                selectedMonth!=calendarDataMonth[0].month?(
                  <TouchableOpacity onPress={()=>{
                    if (selectI > 0) {
                      setSelectI(prev=>prev-1)
                      setActiveDay('')
                      setSelectedMonth(calendarDataMonth[selectI - 1].month)
                    }
                  }} style={{padding: 10,}}>
                    <Svg width={10} height={16} fill="none">
                      <Path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8.5 1 1 8.5 8.5 16"
                      />
                    </Svg>
                  </TouchableOpacity>
                ):(
                  <TouchableOpacity style={{padding: 10,}}>
                    <Svg width={10} height={16} fill="none">
                      <Path
                        stroke="transparent"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8.5 1 1 8.5 8.5 16"
                      />
                    </Svg>
                  </TouchableOpacity>
                )
              }
              <Text style={{
                color: '#FFFFFF',
                fontFamily: 'Light',
                fontSize: 18,
                padding: 10,
              }}>
                {selectedMonth} 
              </Text>
              {
                selectedMonth!=calendarDataMonth[2].month?(
                  <TouchableOpacity onPress={()=>{
                    if (selectI < calendarDataMonth.length - 1) {
                      setActiveDay('')
                      setSelectI(prev=>prev+1)
                      setSelectedMonth(calendarDataMonth[selectI + 1].month)
                    }
                  }} style={{padding: 10,}}>
                    <Svg width={10} height={16} fill="none">
                      <Path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M1.5 16 9 8.5 1.5 1"
                      />
                    </Svg>
                  </TouchableOpacity>
                ):(
                  <TouchableOpacity style={{padding: 10,}}>
                    <Svg width={10} height={16} fill="none">
                      <Path
                        stroke="transparent"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M1.5 16 9 8.5 1.5 1"
                      />
                    </Svg>
                  </TouchableOpacity>
                )
              }
              
            </View>
          </View>

          {/* SELECT DATE */}
            <View style={styles.selectDate}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ width: Dimensions.get('window').width - 50,}}>
                {
                  calendarData.filter(item=>item.month==selectedMonth).map((item, index) => (
                    <TouchableOpacity onPress={()=>{
                      setActiveDay(item.date)
                    }} key={index}>
                      <View style={activeDay!=item.date?{marginRight: 4, paddingHorizontal:15, paddingVertical:9, borderRadius: 12, backgroundColor:'#17181B',gap:5, alignItems: 'center',justifyContent:'center'}:{marginRight: 4, paddingHorizontal:15, paddingVertical:9, borderRadius: 12, backgroundColor:'#E0FE10',gap:5, alignItems: 'center',justifyContent:'center'}}>
                        <Text style={activeDay!=item.date?{
                          color: '#FFFFFF',
                          fontFamily: 'Light',
                          fontSize: 12,
                        }:{
                          color: '#17181B',
                          fontFamily: 'Light',
                          fontSize: 12,
                        }}>
                          {item.day}
                        </Text>
                        <Text style={activeDay!=item.date?{
                          color: '#FFFFFF',
                          fontFamily: 'Light',
                          fontSize: 12,
                        }:{
                          color: '#17181B',
                          fontFamily: 'Light',
                          fontSize: 15,
                        }}>
                          {item.date}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))
                }
                
                
              </ScrollView>
            </View>

          {/* ADD EXER BTN */}
          <TouchableOpacity style={{top: 620,position: 'absolute'}}>
            <View style={styles.botBtn}>
              <Text style={{
                color: '#17181B',
                fontFamily: 'Regular',
                fontSize: 17,
              }}>
                Add New Exercise
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
      <Tabs/>
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
  botBtn: {
    width: Dimensions.get('window').width - 50,
    borderRadius: 12,
    backgroundColor: '#E0FE10',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerPlaner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 25,
    width: Dimensions.get('window').width - 50,
    marginTop: 25,
  },
  selectDate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    width: Dimensions.get('window').width - 50,
  }
})