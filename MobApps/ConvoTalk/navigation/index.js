import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import Landing from '../src/screens/Landing';
import Chat from '../src/screens/Chat';
import Groups from '../src/screens/GroupsDisplay';
import Loc from '../src/screens/LocationTrack';
import WeatherTrig from '../src/screens/WeatherData';
import Pdf from '../src/screens/Pdf';

const Stack = createNativeStackNavigator();

function Main() {
    return (
        <NavigationContainer>{
            <Stack.Navigator initialRouteName="Land">
                <Stack.Screen name='Land' component={Landing}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name='Loc' component={Loc}
                    options={{
                        headerShown: false,
                    }} />

                <Stack.Screen name='Chat' component={Chat}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name='Groups' component={Groups}
                    options={{
                        headerShown: false,
                    }} />
                    <Stack.Screen name='WeatherTrig' component={WeatherTrig}
                    options={{
                        headerShown: false,
                    }} />
                    <Stack.Screen name='Pdf' component={Pdf}
                    options={{
                        headerShown: false,
                    }} />
            </Stack.Navigator>
        }</NavigationContainer>
    );
}
export default Main;