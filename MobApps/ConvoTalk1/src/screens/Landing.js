import { StyleSheet, TouchableOpacity, View, TextInput, Text, KeyboardAvoidingView, Image } from "react-native";
import { useState } from "react";

import TxtInp from '../Components/TextInp';
import Butt from '../Components/Button';
const Landing = (props) => {
    // const { navigate } = props.navigation
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [cnic, setCnic] = useState(null);
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image style={styles.img}
                resizeMode='contain'
                source={require('../../assets/Logo.png')
                }
            />
            <Text style={styles.txxt}>Let's Chat!</Text>
            <TxtInp placeholder='    Enter Your Name'
                onChangeText={(text) => setName(text)}
            />
            <TxtInp
                placeholder='    Enter Your Email'
                onChangeText={(text) => setEmail(text)}
            />
            <TxtInp
                placeholder='    Enter Your Cnic'
                onChangeText={(text) => setCnic(text)}
            />
            <Butt title='Next'
            // onPress={() => { if (email) { navigate('Chat', { name }) } }}
            />
        </KeyboardAvoidingView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#808080',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    txxt: {
        fontSize: 25,
        color: '#6495ed',
        fontStyle: 'italic',
        marginLeft: -100,
        marginBottom: 25,
        marginTop:-130,
        textShadowRadius: 2,
        textShadowColor: '#fff',
        textShadowOffset: {
            height: 1,
            width: 1,
        },
        letterSpacing:3,
        textDecorationLine:'underline',
    },
    img: {
        height: 500,
        width: 500,
        marginTop:-150
    },

})

export default Landing;
