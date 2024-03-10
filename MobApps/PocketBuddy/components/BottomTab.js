import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons'

import Home from '../screens/1Home';
import Cart from '../screens/2Home';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';

const homeName = 'Home';
const profileName = 'Profile';
const cartName = 'Cart';
const settingsName = 'Settings';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        // <NavigationContainer>
        <Tab.Navigator
            initialRouteName="profileName"
            barStyle={{ backgroundColor: 'white' }}
            screenOptions={({ route }) => ({
                tabBaIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;
                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if (rn === profileName) {
                        iconName = focused ? 'list' : 'list-outline'
                    } else if (rn === cartName) {
                        iconName = focused ? 'list' : 'list-outline'
                    } else if (rn === settingsName) {
                        iconName = focused ? 'settings' : 'settings-outline'
                    }
                    return <Ionicons name={iconName} size={size} color='black' />
                }
            })}
        >
            <Tab.Screen name={homeName} component={Home} />
            <Tab.Screen name={profileName} component={ProfileScreen} />
            <Tab.Screen name={cartName} component={Cart} />
            <Tab.Screen name={settingsName} component={SettingsScreen} />
        </Tab.Navigator>
        // </NavigationContainer> 
    );
}
export default MyTabs;