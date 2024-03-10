import { StyleSheet, Text, View, Image } from 'react-native';

function Logo() {
  return (
    <View>
      <Image style={styles.imag}
        resizeMode='contain'
        source={require('../assets/Logo.png')}
      />
      <Text style={styles.titleText}>My Premium Cart</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  imag: {
    height: 120,
    width: 120,
    alignSelf: 'center',

  },
  titleText: {
    textShadowRadius: 6,
    textShadowColor: '#E6084480',
    textShadowOffset: {
      height: 1,
      width: 1,
    },
    color: '#FF002E',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    // fontFamily: 'serif', 
    justifyContent: 'center',
  },

});
export default Logo;