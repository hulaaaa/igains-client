import { NavigationContainer } from '@react-navigation/native';
import MainRouterStack from './src/router/layoutAuth';
import StartRouterStack from './src/router/lauoutStart';

export default function App() {
  const isAuth = false;

  return (
    <NavigationContainer>
      {
        isAuth ? (<MainRouterStack />) : (<StartRouterStack />)
      }
    </NavigationContainer>
  );
}
