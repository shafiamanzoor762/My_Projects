import { StyleSheet, KeyboardAvoidingView, Text, ActivityIndicator, Image, ImageBackground, TouchableOpacity, } from "react-native";
import { useState, useRef } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { PhoneAuthProvider } from "firebase/auth";
import { auth, app } from '../config/Firebase';

import TxtInp from '../Components/TextInp';
import Butt from '../Components/Button';
import Touch from '../Components/TouchableText';

function Login(props) {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userName, setUserName] = useState("");
    const [code, setCode] = useState("");
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifierRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const phoneVerifier = async () => {
        const phoneAuthProvider = new PhoneAuthProvider(auth);
        const verificationID = await phoneAuthProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifierRef.current);
        setVerificationId(verificationID);
        if (verificationID != null) {
            alert('Please Check Your Inbox.')
            navigation.navigate('Verify');
        }
        else {
            alert('InValid Contact Number.')
        }
    }

    return (

        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground style={styles.imagbg}
                resizeMode='contain'
                source={require('../../assets/bg_1.png')}>
                <Image style={styles.img}
                    resizeMode='contain'
                    source={require('../../assets/Logo1.png')
                    }
                />
                <Text style={styles.txxt}>CONVO TALK 1</Text>
                <Text style={styles.txt}>Sign In</Text>
                <TxtInp placeholder='    User Name'
                    onChangeText={(text) => setUserName(text)}
                />
                <TxtInp placeholder='    Phone Number'
                    // secureTextEntry={true}
                    onChangeText={(text) => setPhoneNumber(text)}
                />
                {loading ? <ActivityIndicator color={'black'} size={'large'} /> : null}
                <Butt title='Get verification code'
                    onPress={phoneVerifier}
                />
                <Touch title='Create new account!'
                    onPress={() => { props.navigation.navigate('Signup') }} />
                <FirebaseRecaptchaVerifierModal
                    ref={recaptchaVerifierRef}
                    firebaseConfig={app.options}
                // attemptInvisibleVerification={true}
                />
            </ImageBackground>
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
        fontSize: 30,
        color: '#2882B6',
        fontStyle: 'italic',
        marginBottom: 25,
        marginTop: 125,
        textShadowRadius: 2,
        textShadowColor: '#fff',
        textShadowOffset: {
            height: 1,
            width: 1,
        },
        fontWeight: "bold"
    },
    txt: {
        fontSize: 20,
        color: 'black',
        fontStyle: 'italic',
        marginTop: 10,
        marginRight: 130,
        textShadowRadius: 2,
        textShadowColor: '#fff',
        textShadowOffset: {
            height: 1,
            width: 1,
        },
        letterSpacing: 3,
        textDecorationLine: 'underline',
    },
    img: {
        height: 120,
        width: 120,
        marginTop: -100
    },
    imagbg: {
        height: '102%',
        width: '102%',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    }


});
export default Login;