import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button, View } from 'react-native';
//MainScreens
import Welcome from './screens/3Welcome';
import Sign from './screens/5SignUp';
import Login from './screens/LoginScr';
import ForgetPassword from './screens/6ForgetPasword';
import Home1 from './screens/1Home';
import Home2 from './screens/2Home';
//other Screens
import Webview1 from './screens/Webview';
import Pdf1 from './screens/PdfToApp';
import Main from './screens/Main';

//BottomNavbar
import Navb from './components/BottomTab';

const Stack = createNativeStackNavigator();
function App() {
  return (
  <NavigationContainer>{
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name='Nav' component={Navb}
           options={{
             title: 'Nav',
             headerShown: false,
           }} />

        <Stack.Screen name='Main' component={Main}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen name='Web' component={Webview1}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name='Pdf1' component={Pdf1}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen options={{
          headerShown: false,
        }} name='Welcome' component={Welcome} />
        <Stack.Screen options={{
          headerShown: false,
        }} name='Sign' component={Sign} />
        <Stack.Screen options={{
          headerShown: false,
        }} name='Log' component={Login} />
        <Stack.Screen name='Forget' component={ForgetPassword} />
        <Stack.Screen name="Home1" component={Home1}
          options={{
            title: 'Home Screen1',
            headerShown: false,
          }} />
        <Stack.Screen name='Home2' component={Home2}
          options={{
            title: 'Home Screen2',
            headerShown: false,
          }} />
      </Stack.Navigator>

    }</NavigationContainer >
  );
}
export default App;