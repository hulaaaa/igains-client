import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';
import Splash_IconGains from '../../../assets/svg/Splash_IconGains';
import Splash_GainsText from '../../../assets/svg/Splash_GainsText';
import Arrow from '../../../assets/svg/Arrow';
import { StatusBar } from 'expo-status-bar';
import Animated from 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function SplashStart() {
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
    <LinearGradient
      colors={['#E0FE10', '#06070A']}
      end={{ x: 0.5, y: 0.5 }}
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <Animated.View sharedTransitionTag="sharedTag" style={styles.underDiv}>
        <Splash_IconGains />
        <Text style={{
          zIndex: 1,
          fontFamily: 'Bold',
          fontSize: 38,
          opacity: 0.45,
          color: '#FFFFFF',
          textAlign: 'center',
          marginTop: -20
        }}>One app and build</Text>
        <Text style={{
          zIndex: 1,
          fontFamily: 'Bold',
          fontSize: 38,
          opacity: 0.65,
          color: '#FFFFFF',
          textAlign: 'center',
        }}>Body Of Your Dream</Text>
        <Text style={{
          zIndex: 1,
          fontFamily: 'Bold',
          fontSize: 38,
          opacity: 0.85,
          color: '#FFFFFF',
          textAlign: 'center',
        }}>is</Text>
      </Animated.View>

      <Splash_GainsText />

      <Animated.View style={styles.bottomDiv}>
        
        <Text style={styles.bottomDivText}>
          Sit back never worry about sharing bills!{'\n'}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. {'\n'}
          Corporis, sunt quia?{'\n'}
        </Text>
        <View style={styles.bottomBtn}>
          <TouchableOpacity style={styles.containerBtn2}>
            <Text style={styles.text2}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerBtn}>
            <Text style={styles.text}>Next</Text>
            <Arrow />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <StatusBar style="inverted" />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Bold',
    alignItems: 'center',
    paddingTop: 140,
  },
  underDiv: {
    fontFamily: 'Bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },
  bottomDiv: {
    fontFamily: 'Bold',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '37%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#17181B',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 45,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  bottomDivText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Regular',
    fontSize: 15,
  },
  bottomBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },


  containerBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 17,
    width: '40%',
    paddingTop: 17,
    backgroundColor: '#E0FE10',
    gap: 10,
    borderRadius: 12,
    borderStyle: 'solid',
    borderColor: '#262626',
    borderWidth: 1,
  },
  text: {
    color: '#1E1E1E',
    fontFamily: 'Bold',
    fontSize: 15,
  },

  containerBtn2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 17,
    width: '40%',
    paddingTop: 17,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    borderStyle: 'solid',
    borderColor: '#262626',
    borderWidth: 1,
  },
  text2: {
    color: '#FFFFFF',
    fontFamily: 'Bold',
    fontSize: 15,
  }
})