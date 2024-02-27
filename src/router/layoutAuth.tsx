import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Profile from "../screens/auth/Profile"
import Home from "../screens/auth/Home"
import Stat from "../screens/auth/Stat"
import Planer from "../screens/auth/Planer"

const Stack = createNativeStackNavigator()
function MainRouterStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen options={{ animation: 'fade',  gestureEnabled: false }} name="Home" component={Home} />
      <Stack.Screen options={{ animation: 'fade', gestureEnabled: false}} name="Stat" component={Stat} />
      <Stack.Screen options={{ animation: 'fade', gestureEnabled: false }} name="Planer" component={Planer} />
      <Stack.Screen options={{ animation: 'fade', gestureEnabled: false }} name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}
export default MainRouterStack