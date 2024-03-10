import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import LeftToRightGradientHome from './LeftToRightGradientHome';

export default function HomeIcons(props) {
  return (
      <LeftToRightGradientHome>
      <TouchableOpacity 
      style={styles.icon}
      onPress={props.onPress}>
        <Image 
            style={styles.image}
            source={props.source} />
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
     </LeftToRightGradientHome> 
  );
}

const styles = StyleSheet.create({
  icon: 
  {
    flex: 1, 
    height: 70,
    alignSelf: 'center', 
    borderRadius:10,
        
  },
  image:{
    alignSelf: 'center',
    marginTop: 5,
    width: 35,
    height: 35,
  },
  text:{
    alignSelf: 'center', 
    marginTop: 5,
    fontSize: 12,
  }

});
