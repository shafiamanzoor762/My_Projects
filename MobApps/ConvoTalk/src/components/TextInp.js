import { TextInput, StyleSheet, View, Text } from 'react-native';
import * as React from 'react';

const Input = (props) => {
    return (
            <TextInput style={styles.txtInput} placeholder={props.placeholder} onChangeText={text => props.onChangeText(text)}></TextInput>
    )
}

const styles = StyleSheet.create({

    txtInput: {
        height: 35,
        width: 250,
        borderRadius: 9,
        justifyContent: 'center',
        fontSize: 12,
        marginTop: 15,
        backgroundColor: '#808080',
        elevation: 5,
    },
});
export default Input;