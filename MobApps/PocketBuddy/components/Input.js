import { TextInput, StyleSheet, View, ImageBackground } from 'react-native';
import * as React from 'react';

import LinearGradient from 'react-native-linear-gradient';
const Input = (props) => {
    return (
        <View style={styles.vie}>
            <ImageBackground style={styles.imagbg}
                resizeMode='contain'
                source={require('../assets/Input.png')}> 
                <TextInput style={styles.txtInput} placeholder={props.placeholder} onChangeText={text=>props.onChangeText(text)}></TextInput>
                 </ImageBackground>
                {/* <LinearGradient colors={['d5dfbeb',' white','ebefff', 'fffff']} start={{x:0,y:1}} end={{x:1,y:0}} style={{height:20,width:40,alignSelf:'center',justifyContent:'center'}}> 
                <TextInput style={styles.txtInput} placeholder={props.placeholder} onChangeText={text=>props.onChangeText(text)}></TextInput>
                 </LinearGradient> */}
        </View>
    )
}

const styles = StyleSheet.create({
    vie: {
        marginLeft: 0,
        width: 300,
        // backgroundColor: 'pink'
    },
    txtInput: {
        height: 35,
        width: 230,
        borderRadius: 9,
        justifyContent: 'center',
        fontSize: 12,
        color: 'grey',
        marginTop:7
    },
    imagbg: {
        height: 65,
        width: 300,
        marginTop: 4,
        marginLeft: 26,
        paddingLeft: 40,
        paddingTop: 5
    }
});
export default Input;