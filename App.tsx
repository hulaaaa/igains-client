import { NavigationContainer } from '@react-navigation/native';
import MainRouterStack from './src/router/layoutAuth';

export default function App() {
  return (
    <NavigationContainer>
      <MainRouterStack />
    </NavigationContainer>
  );
}
