import { TouchableOpacity, Text,StyleSheet } from "react-native";
import * as React from 'react';

const TouchableText = (props) => {
    return (
        <TouchableOpacity 
        onPress={()=>props.onPress()} style={styles.container} >
            <Text style={styles.txt}>{props.title}</Text>
        </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
    container:{
        alignItems: 'flex-end', 
        margin: 15,
    },
    txt:{
        fontSize:8,
    }
});
export default TouchableText;