import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';

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
        backgroundColor: '#2882B6',
        height: 35,
        width: 200,
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        // borderWidth: 2,
        // borderColor: '#FF002E',
        shadowColor: '#0000cd',
        elevation:10,
        marginTop:40
    },
    txt: {
        alignSelf: 'center',
        color:'white',
        fontWeight:'400',
    }
});
export default Butt;