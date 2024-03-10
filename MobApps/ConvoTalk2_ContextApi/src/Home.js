import { View, Button, StyleSheet, Text } from 'react-native'
// import { AppContext } from '../store/context/SecondContext';
import { AuthContext } from '../store/context/AuthContext';
import { useContext } from 'react';

function Home(props) {

  const { state, AddData,RemoveData } = useContext(AppContext) //by using colon ( : ) we can change the name of state
  const { state: AddUser,DelUser } = useContext(AuthContext) 
  console.log(state)

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button style={styles.butt} title='Add Value'
        onPress={() => AddData('10')} />
        <Button style={styles.butt} title='Remove Value'
        onPress={() => RemoveData ()} />

        <Button style={styles.butt} title='Add User'
        onPress={() => AddUser ()} />
        <Button style={styles.butt} title='Del User'
        onPress={() => DelUser ()} />
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
  butt: {
    height: 10,
    width: 50
  }
});

export default Home;
