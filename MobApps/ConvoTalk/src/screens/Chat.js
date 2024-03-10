// Core Components
import { View, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, Image, ImageBackground, KeyboardAvoidingView, ActivityIndicator, Button, } from 'react-native'
// Hook's
import { useState, useEffect, useRef } from 'react';
import { useRoute } from '@react-navigation/native';
// render navigation built-in fnts
import { useNavigation } from '@react-navigation/native';

import app from "../config/Firebase"
import { getFirestore, addDoc, collection, serverTimestamp, getDocs, onSnapshot, query, orderBy } from 'firebase/firestore'


const Chat = (props) => {
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const db = getFirestore(app)
    const { params } = useRoute();
    const { name } = params;
    const { group } = params;
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
        setLoading(true)
        const q = query(collection(db, "Chat"), orderBy("timeStamp", "asc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let d = []
            querySnapshot.forEach((doc) => {
                d.push(doc.data());
            });
            setData(d)
            setLoading(false)
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
    // Scroll to Top
    const flatListRef = useRef(null);
    const scrollToTop = () => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ animated: true, index: 0 });
        }
    };
    // Scroll to Bottom
    const scrollToBottom = () => {
        if (flatListRef.current) {
            const lastIndex = data.length - 1;
            flatListRef.current.scrollToIndex({
                animated: true,
                index: lastIndex,
                viewPosition: 0, // Scrolls to the bottom of the list
            });
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground style={styles.imagbg}
                resizeMode='contain'
                source={require('../../assets/bg_3.png')}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.Bac}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={{ fontSize: 35, marginTop: -15, marginRight: 3, }}>{'<'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTxt}>Fantastic 3</Text>
                </View>
                {loading ? <ActivityIndicator color={'blue'} size={'large'} /> : null}

                <FlatList ref={flatListRef}
                    data={data}
                    renderItem={({ item }) => {
                        return (name == item.sender ?
                            <View style={styles.withName}>
                                <Text style={styles.txtName}>{'You'}</Text>
                                <Text style={styles.txtMsg}>{item.message}</Text>
                                {item.timeStamp ? <Text style={{ fontSize: 9, margin: 3 }}>{item.timeStamp.toDate().toISOString()}</Text> : null}
                            </View> :
                            <View style={styles.withoutName}>
                                <Text style={styles.txtName}>{item.sender}</Text>
                                <Text style={styles.txtMsg}>{item.message}</Text>
                                {item.timeStamp ? <Text style={{ fontSize: 9, margin: 3 }}>{item.timeStamp.toDate().toISOString()}</Text> : null}
                            </View>

                        );
                    }} keyExtractor={(item, index) => index}>

                </FlatList >
                <TouchableOpacity style={{ height: 23, width: 27, borderRadius: 23 / 2, backgroundColor: 'white', marginLeft: 330, marginBottom: 10, borderWidth: 1, borderColor: 'black', alignItems: 'center', justifyContent: 'center' }}
                    onPress={scrollToTop}>
                    <Image style={{ height: 20, width: 20, }}
                        resizeMode='contain'
                        source={require('../../assets/up-arrow.png')
                        }
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ height: 23, width: 27, borderRadius: 23 / 2, backgroundColor: 'white', marginLeft: 330, marginBottom: 10, borderWidth: 1, borderColor: 'black', alignItems: 'center', justifyContent: 'center' }}
                    onPress={scrollToBottom}>
                    <Image style={{ height: 20, width: 20, transform: [{ rotate: '180 deg' }], }}
                        resizeMode='contain'
                        source={require('../../assets/up-arrow.png')
                        }
                    />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <TextInput style={styles.inpMsg}
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
                            source={require('../../assets/Send.png')}
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
        // backgroundColor: '#a9a9a9',
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
        backgroundColor: '#2882B6',
        pading: 5,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        borderBottomLeftRadius: 18,
        margin: 5,
        marginRight: 10,
        alignSelf: 'flex-end',
        borderWidth: 7,
        borderColor: '#2882B6'
    },
    withoutName: {
        width: '60%',
        backgroundColor: '#808080',
        pading: 5,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        borderBottomRightRadius: 18,
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
        fontFamily: 'sans-serif',
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
    inpMsg: {
        height: 40,
        width: 300,
        backgroundColor: '#dbd7d2',
        borderRadius: 20,
        marginLeft: 11
    }
});

export default Chat;