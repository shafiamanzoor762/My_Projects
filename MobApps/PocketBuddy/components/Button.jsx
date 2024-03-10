import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Butt = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.onPress()}
            style={styles.btn}>
            <Text style={styles.txt}>{props.title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#d3d3d3',
        height: 30,
        width: 200,
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#FF002E',
        shadowColor: '#FF002E',
        elevation:10,
        // shadowOffset: { height: 2, width: 2 },//IOS
        // shadowRadius: 1, //IOS
        // shadowOpacity:5,//IOS
    },
    txt: {
        alignSelf: 'center',
    }
});
export default Butt;