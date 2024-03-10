//Core Components
import { StyleSheet, KeyboardAvoidingView, Text, ActivityIndicator, Image, ImageBackground, TouchableOpacity, } from "react-native";
import PhoneInput from "react-phone-number-input";
// Hook's
import { useState, useEffect,useRef } from "react";
//Custom Components
import TxtInp from '../components/TextInp';
import Butt from '../components/Button';
import Touch from '../components/TouchableText';

// PUSH Notifications
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

function SignUp(props) {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [name, setName] = useState("");
    // const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    // const onSendPressed = async () => {
    //     try {
    //         if (message) {
    //             await addDoc(collection(db, "Chat"), {
    //                 sender: name,
    //                 phone: phoneNumber,
    //                 timeStamp: serverTimestamp()
    //             })
    //         }
    //         setMessage(null)
    //     } catch (e) {
    //         console.log(message);
    //         console.log('Error Message', e)
    //     }
    // }
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    async function registerForPushNotificationsAsync() {
        let token;
      
        if (Platform.OS === "android") {
          await Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "#FF231F7C",
          });
        }
      
        if (Device.isDevice) {
          const { status: existingStatus } =
            await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== "granted") {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== "granted") {
            alert("Failed to get push token for push notification!");
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
          console.log(token);
        } else {
          alert("Must use physical device for Push Notifications");
        }
      console.log(token);
        return token;
      }
    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });
        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
        
    }, []);

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground style={styles.imagbg}
                resizeMode='contain'
                source={require('../../assets/bg_2.png')}>
                <Image style={styles.img}
                    resizeMode='contain'
                    source={require('../../assets/Logo1.png')
                    }
                />
                <Text style={styles.txxt}>CONVO TALK 1</Text>
                <Text style={styles.txt}>Sign Up</Text>
                <TxtInp placeholder='    User Name'
                    onChangeText={(text) => setName(text)}
                />
                <TxtInp placeholder='    Enter cnic'
                    onChangeText={(text) => setName(text)}
                />
                <TxtInp placeholder='    Phone Number'
                    secureTextEntry={true}
                    onChangeText={(text) => setPhoneNumber(text)}
                />
                {/* <PhoneInput
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}/> */}

                {loading ? <ActivityIndicator color={'black'} size={'large'} /> : null}
                <Butt title='Get Started'
                    onPress={() => { props.navigation.navigate('Groups', { name }) }}
                />
                <Butt title='Check Where You Are?'
                    onPress={() => { props.navigation.navigate('Loc') }}
                /> 
                <Butt title='Check Whether :)'
                    onPress={() => { props.navigation.navigate('WeatherTrig') }}
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
export default SignUp;