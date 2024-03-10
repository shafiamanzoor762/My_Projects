import { View, StyleSheet, FlatList, Text, Button, TextInput, Touchable, TouchableOpacity, Image, ImageBackground, KeyboardAvoidingView } from 'react-native'
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import app from "../config/Firebase"
import { getFirestore, addDoc, collection, serverTimestamp, getDocs, onSnapshot, query,orderBy } from 'firebase/firestore'

const Chat = (props) => {
    const db = getFirestore(app)
    // const { params } = useRoute();
    // const { name } = params;
    const name = 'Aliya';
    const [message, setMessage] = useState(null);
    const [data, setData] = useState([{
        text: 'Hello! How are You',
        sender: 'Aliya'
    }, {
        text: 'Hi! I am fine. What about you?',
        sender: 'Aliza'
    },
    ]);

    const loadData = async () => {
        const q = query(collection(db, "Chat"),orderBy("timeStamp","asc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let d = []
            querySnapshot.forEach((doc) => {
               d.push(doc.data());
            });
            setData(d)
        });
    }

    useEffect(() => {
        loadData()
    }, [])

    const onSendPressed = async () => {
        try {
            if (message) {
                await addDoc(collection(db, "Chat"), {
                    sender: name,
                    message: message,
                    timeStamp: serverTimestamp()
                })
            }
            setMessage(null)
        } catch (e) {
            console.log(message);
            console.log('Error Message', e)
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground style={styles.imagbg}
                resizeMode='contain'
                source={require('../../assets/bg_3.png')}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.Bac}
                        onPress={() => props.navigation.navigate.goBack()}
                    >
                        <Text style={{ fontSize: 35, marginTop: -15, marginRight: 3, }}>{'<'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTxt}>Group Name</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (name == item.sender ?
                            <View style={styles.withName}>
                                <Text style={styles.txtName}>{'You'}</Text>
                                <Text style={styles.txtMsg}>{item.text}</Text>
                                {item.timeStamp ? <Text style={{ fontSize: 8, margin: 2 }}>{item.timeStamp.toDate().toISOString()}</Text> : null}
                            </View> :
                            <View style={styles.withoutName}>
                                <Text style={styles.txtName}>{item.sender}</Text>
                                <Text style={styles.txtMsg}>{item.text}</Text>
                            </View>
                        );
                    }} keyExtractor={(item, index) => index}>
                </FlatList >

                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <TextInput style={{ height: 40, width: 300, backgroundColor: '#dbd7d2', borderRadius: 20, marginLeft: 5 }}
                        value={message}
                        placeholder='   Message'
                        onChangeText={(text) => setMessage(text)}
                    />
                    <TouchableOpacity style={styles.Touch}
                        onPress={() => onSendPressed()}
                    >
                        {/* <Text style={{fontSize:40,marginTop:-13}}>{'>'}</Text> */}
                        <Image style={styles.imag}
                            resizeMode='contain'
                            source={require('../../assets/Send.png')
                            }
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a9a9a9',
        width: '100%',
    },
    imagbg: {
        height: '102%',
        width: '102%',
        marginLeft: -6
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#dbd7d2',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderColor: 'pink',
        shadowColor: '#0000cd',
        elevation: 15,
        width: '97%',
        alignSelf: 'center',
        marginLeft: 3
    },
    headerTxt: {
        alignSelf: 'center',
        fontWeight: '500',
        marginLeft: 25,
        marginTop: 45,
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
    },
    withName: {
        width: '60%',
        backgroundColor: '#6495ed',
        pading: 5,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        margin: 5,
        marginRight: 10,
        alignSelf: 'flex-end',
        borderWidth: 7,
        borderColor: '#6495ed'
    },
    withoutName: {
        width: '60%',
        backgroundColor: '#808080',
        pading: 5,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        margin: 5,
        marginLeft: 14,
        borderWidth: 7,
        borderColor: '#808080'
    },
    txtName: {
        fontWeight: 'bold',
        color: '#ffcc00',
        fontFamily: 'serif',

    },
    txtMsg: {
        color: 'white',
        fontFamily: 'sans-serif-light',
    },
    imag: {
        width: 37,
        height: 37
    },
    Touch: {
        height: 44,
        width: 44,
        borderRadius: 44 / 2,
        backgroundColor: '#808080',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 6
    },
    Bac: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        backgroundColor: '#808080',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 40,
        shadowColor: '#0000cd',
        elevation: 15,
    },
});

export default Chat;