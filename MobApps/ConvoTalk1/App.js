import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import firebase from './src/config/Firebase';

import Nav from './navigation';
import Landing from './src/screens/Landing';
import Login from './src/screens/Login';
import Signup from './src/screens/SignUp';
import Chat from './src/screens/Chat';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Nav/>  */}
      {/* <Landing/>  */}
      {/* <Login/>     */}
      <Chat />
      {/* <Signup/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
