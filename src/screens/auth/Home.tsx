import { Button, Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Tabs from '../../components/Tabs'
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Animated from 'react-native-reanimated';
import HeaderText from '../../components/HeaderText';
import SearchBar from '../../components/SearchBar';
import TasksTodayHome from '../../components/TasksTodayHome';
import FavExercises from '../../components/FavExercises';
import { StatusBar } from 'expo-status-bar';
import TrainingCourse from '../../components/TrainingCourse';

SplashScreen.preventAutoHideAsync();


export default function Home() {
  const [progress, setProgress] = useState(0.5);
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


  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <SafeAreaView >
        {/* HEADER and SEARCH BAR */}
        <View style={styles.header_search}>
          <HeaderText second={false} />
          <SearchBar />
        </View>

        {/* TASKS for TODAY */}
        <View style={styles.divtasks}>
          <Text style={{ fontFamily: 'Regular', fontSize: 21, color: 'white', }}>Tasks for Today 🔥</Text>
          <TasksTodayHome />
        </View>

        {/* FAVORITE EXERCISES */}
        <View style={styles.divtasks}>
          <Text style={{ fontFamily: 'Regular', fontSize: 21, color: 'white', }}>Favourite Exercises ❤️</Text>
          <FavExercises />
        </View>

        {/* TRAINING COURSES */}
        <View style={styles.divtasks}>
          <Text style={{ fontFamily: 'Regular', fontSize: 21, color: 'white', }}>Training courses 💪🏻</Text>
          <TrainingCourse/>
        </View>
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
  welcome: {
    textAlign: 'center',
    fontFamily: 'Regular',
    fontSize: 30,
    color: 'white',
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
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 15,
    marginTop: 20,
    width: Dimensions.get('window').width - 50,
  },

})