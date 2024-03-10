import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from '../src/screens/SignUp';
import Login from '../src/screens/Login';
import Verif from '../src/screens/VerifyOTD';
import Landing from '../src/screens/Landing';
import Chat from '../src/screens/Chat';
const Stack = createNativeStackNavigator();
function Main() {
    return (
        <NavigationContainer>{
            <Stack.Navigator initialRouteName="Login">
                {/* <Stack.Screen name='Signup' component={Signup}
                    options={{
                        title: 'Sign Up',
                        headerShown: false,
                    }} /> */}
                <Stack.Screen name='Login' component={Login}
                    options={{
                        title: 'Log In',
                        headerShown: false,
                    }} />
                <Stack.Screen name='Verify' component={Verif}
                    options={{
                        title: 'Verify Code',
                        headerShown: false,
                    }} />

                <Stack.Screen name='Land' component={Landing}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name='Chat' component={Chat}
                    options={{
                        headerShown: false,
                    }} />
            </Stack.Navigator>
        }</NavigationContainer>
    );
}
export default Main;