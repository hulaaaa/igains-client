import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Profile from "../screens/auth/Profile"
import Home from "../screens/auth/Home"
import Stat from "../screens/auth/Stat"
import Planer from "../screens/auth/Planer"

const Stack = createNativeStackNavigator()
function MainRouterStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen options={{ animation: 'flip' }} name="Home" component={Home} />
      <Stack.Screen options={{ animation: 'fade_from_bottom' }} name="Stat" component={Stat} />
      <Stack.Screen options={{ animation: 'fade_from_bottom' }} name="Planer" component={Planer} />
      <Stack.Screen options={{ animation: 'fade_from_bottom' }} name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

export default MainRouterStack