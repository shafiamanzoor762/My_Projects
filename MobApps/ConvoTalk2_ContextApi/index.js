import { registerRootComponent } from 'expo';
import { AppRegistry,Platform } from 'react-native';
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

import { name as main } from './app.json';

if(Platform.OS=="android"){
    registerRootComponent(App);
}
else{
AppRegistry.registerComponent(main, () => App);
}

