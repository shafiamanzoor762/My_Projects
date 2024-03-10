import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';

const Person=(props)=>{
    const [isHappy, setIsHappy] = useState(false);
    return(
<View>
    <Text
        style={{
            fontWeight:'bold',
            color:props.color,
            fontSize:props.font,
        }}>{'\n'}Hey, My name is {props.name} and I am {isHappy ? 'happy' : 'sad'}!
    </Text>
    <Button
        onPress={() => {
          setIsHappy(false);
        }}
        disabled={!isHappy}
        title={isHappy? 'Dont be Sad! Believe on Yourself.' : 'Stay Happy! Just Keep a Passion.'}
      />
</View>);
}
export default Person
