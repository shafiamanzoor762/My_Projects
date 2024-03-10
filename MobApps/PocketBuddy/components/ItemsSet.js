import { View, StyleSheet, TouchableOpacity, Image, Text, } from 'react-native';

const ItemsSet = (props) => {
    return (
        <TouchableOpacity style={styles.butt}>
            <Image source={{uri:props.img}} style={styles.imag} />
            <Text style={styles.txt}>{props.title}</Text>
        </TouchableOpacity>
    );
}
export default ItemsSet;
const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        width: 400,
    },
    // innerView: {
    //     flex: 1,
    //     width: 400,
    //     alignItems: 'center'
    // },
    // inner: {
    //     flex: 1,
    //     width: 400,
    //     alignItems: 'center'
    // },
    butt: {
        height: 65,
        width: 100,
        backgroundColor: '#e5e4e2',
        borderRadius: 10,
        shadowColor: '#dcdcdc ',
        elevation: 10,
        alignContent:'center',
        marginLeft:15,
        marginTop:20    
    },
    imag: {
        alignSelf: 'center',
        alignContent: 'center',
        marginTop:5,  
        height:40,
        width:40     
    },
    txt: {
        alignSelf: 'center',
        alignContent: 'center',
        fontSize: 10,
    },
});