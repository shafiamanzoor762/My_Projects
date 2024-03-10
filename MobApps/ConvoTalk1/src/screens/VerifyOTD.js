import { StyleSheet, View, TouchableOpacity, TextInput, Text } from "react-native";
import { useState, useRef } from "react";
import { auth, app } from '../config/Firebase';

const Verif = (props) => {
    const [verificationId, setVerificationId] = useState(null);
    function phoneVerifier() {
        if (props.VerfCode == verificationId) {
            alert("Congrats You're Successfully LogIn.")
            navigation.navigate('Land');
        }
        else {
            props.navigation.goBack();
        }
    }
    return (

        <View style={styles.container}>
            <Text style={styles.txxt}>Verification</Text>
            <TextInput style={styles.txtInp} placeholder='VerificationId'
                // secureTextEntry={true}
                onChangeText={(text) => setVerificationId(text)}
            >
            </TextInput>
            <TouchableOpacity style={styles.touch}
                onPress={phoneVerifier}
            ><Text>Sign In</Text></TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtInp: {
        width: 280,
        height: 40,
        backgroundColor: '#c0c0c0',
        borderRadius: 15,
    },
    touch: {
        height: 40,
        width: 200,
        marginTop: 50,
        backgroundColor: '#dda0dd',
        borderRadius: 10,
        alignItems: 'center',
        alignContent: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 3,
    },
    txxt: {
        fontSize: 70,
        color: '#dda0dd',
        marginLeft: '20'
    }
});
export default Verif;