import { NavigationContainer } from '@react-navigation/native';
import MainRouterStack from './src/router/layoutAuth';
import StartRouterStack from './src/router/lauoutStart';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    SplashScreen.hideAsync();
  }, []);
  
  const isAuth = false;

  return (
    <NavigationContainer>
      {
        isAuth ? (<MainRouterStack />) : (<StartRouterStack />)
      }
    </NavigationContainer>
  );
}
