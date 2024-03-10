import { View, StyleSheet, TouchableOpacity, Image, Text, } from 'react-native';

const ItemsSet = (props) => {
    return (
        <TouchableOpacity style={styles.butt}>
            <Text style={styles.txt}>{props.title}</Text>
            <Text style={styles.txtt}>{props.data}</Text>
        </TouchableOpacity>
    );
}
export default ItemsSet;
const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        width: 400,
    },
    butt: {
        height: 80,
        width: 120,
        backgroundColor: '#878585',
        borderRadius: 10,
        shadowColor: '#dcdcdc ',
        elevation: 10,
        alignContent:'center',
        marginLeft:10,
        marginTop:15    
    },
    txt: {
        alignSelf: 'center',
        alignContent: 'center',
        fontSize: 14,
        color:'black',
        marginTop:5,
    },
    txtt: {
        alignSelf: 'center',
        alignContent: 'center',
        fontSize: 18,
        color:'white'
    },
});