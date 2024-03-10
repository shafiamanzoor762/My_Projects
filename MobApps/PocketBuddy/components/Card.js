import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const Card = (props) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image source={props.path} style={styles.imag} />
            <Text style={styles.txt}>{props.title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    card: {
        height: 70,
        width: 150,
        marginLeft: 20,
        marginTop: 10,
        backgroundColor: '#e5e4e2',
        borderRadius: 10,
        shadowColor: '#dcdcdc ',
        elevation: 10,
    },
    imag:{
        alignSelf: 'center', 
        alignContent: 'center' 
    },
    txt:{ 
        fontSize: 10, 
        alignSelf: 'center', 
        alignContent: 'center' 
    }
})

export default Card;