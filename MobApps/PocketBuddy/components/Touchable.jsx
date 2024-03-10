import React from 'react'
import { Alert, Text, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native'

const AlertExample = () => {
   const showAlert = () =>{
      Alert.alert(
         'Hey, You pressed Touchable'
      )
   }
   return (
      // <TouchableOpacity onPress = {showAlert} style = {styles.button}>
      //    <Text>Touchable Opacity</Text>
      // </TouchableOpacity>
    <TouchableHighlight onPress = {showAlert} style = {styles.button}>
         <Text>Touchable Highlight</Text>
      </TouchableHighlight>
   )
}
export default AlertExample;

const styles = StyleSheet.create ({
   button: {
      backgroundColor: 'green',
      width: 200,
      borderRadius: 50,
      alignItems: 'center',
      marginTop: 100
   }
})