import { StyleSheet, Text, View, TextInput, ActivityIndicator, Button, setCount, ScrollView,Image,ImageViewer } from 'react-native';
const Flex = () => {
    return (
  
      <View style={{ flex: 1, flexDirection: 'row',height:720,width:330 ,backgroundColor:'#ffe5b4'}} >
        <View style={{ flex: 1, backgroundColor: '#d8bfd8' }} />
        <View style={{ flex: 2, backgroundColor: '#e9ffdb' }} />
        <View style={{ flex: 3, backgroundColor: 'rgb(143,188,143)', flexDirection: 'column-reverse', padding: 10 }} >
          <View style={{ flex: 1, backgroundColor: '#ffd700' }}>
            <Text style={styles.titleText}>{'\n'}Welcome!</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: 'black', padding: 10, justifyContent: 'flex-end' }} >
            <View style={{ flex: 0.2, backgroundColor: 'blue' }} />
            <View style={{ flex: 0.2, backgroundColor: 'pink' }} >
              <Text>I am flex end.</Text>
            </View>
            <View style={{ flex: 0.2, backgroundColor: 'purple' }} />
          </View>
          <View style={{ flex: 0.5, backgroundColor: '#ecebbd' }} />
          <View style={{ flex: 0.5, backgroundColor: 'white', flexDirection: 'row-reverse', padding: 10, justifyContent: 'space-around' }} >
            <View style={{ flex: 0.2, backgroundColor: 'blue' }} />
            <View style={{ flex: 0.2, backgroundColor: 'pink' }} >
            <Text style={{fontSize: 12}}>Space around.</Text>
            </View>
            <View style={{ flex: 0.2, backgroundColor: 'purple' }} />
          </View>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    titleText: {
      color: '#a300cc',
      fontSize: 27,
      fontWeight: 'bold',
      fontFamily: 'serif', justifyContent: 'center',
    }
  });
  export default Flex;