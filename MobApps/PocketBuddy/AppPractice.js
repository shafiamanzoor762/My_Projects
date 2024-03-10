import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ActivityIndicator, Button, setCount, ScrollView, Image, ImageViewer } from 'react-native';
import { Animated } from 'react-native';
import Person from './components/Person';
import Flex from './components/Flex';
import Flexx from './components/FlexBasicGrowShrink';
import Comp from './components/CoreComponents';
import ListBasics from './components/Lists'
import Touch from './components/Touchable'
import Modal from './components/Modal'
export default function App() {
  // const [isname, setIsName] = useState(true);
  var dec;
  var cnt;
  return (
    <ScrollView>
      <View
        style={{ flexDirection: 'column', flex: 1, padding: 15, backgroundColor: '#ffcba4' }}>

        {/* <View style={styles.container}> */}
        <Flex />
        <Comp />
        {/* <Flexx/> */}
        <Text style={styles.titleText}>Pocket Buddy</Text>

        {/* Image View */}
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}
          style={{ width: 50, height: 40 }}
        />

        {/*Input As Text */}

        <TextInput
          style={styles.txtinput}
          defaultValue="I am Text Input!" />

        {/* Activity Indicator */}
        {/* this Load component can render multiple times */}

        <Load />

        {/* Props */}

        <Person
          color={'red'}
          name={'Aliya'} />
        <Person
          color={'#d8bfd8 '}
          name={'Alina'} />
        <Person
          color={'#ffff00'}
          name={'Aliza'} />
        <Person
          color={'#0000ff'}
          name={'Alina'} />

        {/* <Button
        title='decrement'
        onPress={() => {
          dec = dec - 1
          console.log(`dec is ${dec}`)
          setCount(cnt + 1)
          console.log(`cnt is ${cnt}`)
        }} /> */}
        <ListBasics />
        <Modal />
        <Touch />

        <StatusBar style="auto" />
      </View>
    </ScrollView>
      
  );
}




const Load = () => (
  <View >
    <ActivityIndicator color="white" size='large' />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#a300cc',
    fontSize: 27,
    fontWeight: 'bold',
    fontFamily: 'serif', justifyContent: 'center',
  },
  txtinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
});
