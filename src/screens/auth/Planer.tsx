import { Dimensions, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
              <TouchableOpacity style={{padding: 10,}}>
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
              <Text style={{
                color: '#FFFFFF',
                fontFamily: 'Light',
                fontSize: 18,
              }}>
                February 
              </Text>
              <TouchableOpacity>
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
            </View>
          </View>

          {/* SELECT DATE */}
            <View style={styles.selectDate}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ width: Dimensions.get('window').width - 50,}}>
                <TouchableOpacity>
                  <View style={{marginRight: 4, paddingHorizontal:15, paddingVertical:9, borderRadius: 12, backgroundColor:'#17181B',gap:5, alignItems: 'center',justifyContent:'center'}}>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'Light',
                      fontSize: 12,
                    }}>
                      Mon
                    </Text>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'Light',
                      fontSize: 15,
                    }}>
                      26
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{marginRight: 4,paddingHorizontal:15, paddingVertical:9, borderRadius: 12, backgroundColor:'#17181B',gap:5, alignItems: 'center',justifyContent:'center'}}>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'Light',
                      fontSize: 12,
                    }}>
                      Tue
                    </Text>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'Light',
                      fontSize: 15,
                    }}>
                      27
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{marginRight: 4,paddingHorizontal:15, paddingVertical:9, borderRadius: 12, backgroundColor:'#17181B',gap:5, alignItems: 'center',justifyContent:'center'}}>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'Light',
                      fontSize: 12,
                    }}>
                      Wen
                    </Text>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'Light',
                      fontSize: 15,
                    }}>
                      28
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{marginRight: 4,paddingHorizontal:15, paddingVertical:9, borderRadius: 12, backgroundColor:'#17181B',gap:5, alignItems: 'center',justifyContent:'center'}}>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'Light',
                      fontSize: 12,
                    }}>
                      Thu
                    </Text>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'Light',
                      fontSize: 15,
                    }}>
                      29
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{marginRight: 4,paddingHorizontal:15, paddingVertical:9, borderRadius: 12, backgroundColor:'#17181B',gap:5, alignItems: 'center',justifyContent:'center'}}>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'Light',
                      fontSize: 12,
                    }}>
                      Fri
                    </Text>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'Light',
                      fontSize: 15,
                    }}>
                      30
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{marginRight: 4,paddingHorizontal:15, paddingVertical:9, borderRadius: 12, backgroundColor:'#17181B',gap:5, alignItems: 'center',justifyContent:'center'}}>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'Light',
                      fontSize: 12,
                    }}>
                      Sat
                    </Text>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'Light',
                      fontSize: 15,
                    }}>
                      31
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{paddingHorizontal:15, paddingVertical:9, borderRadius: 12, backgroundColor:'#17181B',gap:5, alignItems: 'center',justifyContent:'center'}}>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'Light',
                      fontSize: 12,
                    }}>
                      Sat
                    </Text>
                    <Text style={{
                      color: '#FFFFFF',
                      fontFamily: 'Light',
                      fontSize: 15,
                    }}>
                      31
                    </Text>
                  </View>
                </TouchableOpacity>
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