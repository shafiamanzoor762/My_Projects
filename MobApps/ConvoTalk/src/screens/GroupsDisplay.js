// Core Components
import { View, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, Image, ImageBackground, KeyboardAvoidingView, ActivityIndicator, } from 'react-native'
// Hook's
import { useState, } from 'react';
import { useRoute } from '@react-navigation/native';
// render navigation built-in fnts
import { useNavigation } from '@react-navigation/native';

const Chat = (props) => {
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const { params } = useRoute();
    const { name } = params;

    // const db = getFirestore(app)
    const [group, setGroup] = useState([
        'Fantastic 3',
        'The A-Team',
        'Fun-tastic Friends',
        'Weekend Warriors',
        'The Dream Team',
        'Squad Goals',
        'The Chatter Box',
        'Hangover Heroes',
        'The Gossip Gals',
        'Non-Stop Chatters',
        'Brainstorm Brigade ',
        'Cubicle Crew',
        'The Boardroom Buddies',
        'Work Hard, Play Hard',
        'The Hustlers',
    ]);

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

                    <Text style={styles.headerTxt}>Your Groups</Text>
                </View>
                {loading ? <ActivityIndicator color={'blue'} size={'large'} /> : null}

                <FlatList style={{ margin: 10 }}
                    data={group}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flexDirection: 'row', borderColor: '#2882B6', borderWidth: 2, borderRadius: 10, marginBottom: 5, backgroundColor: 'grey' }}>
                                <Image style={{ height: 42, width: 42 }}
                                    resizeMode='contain'
                                    source={require('../../assets/Logo1.png')
                                    }
                                />
                                <TouchableOpacity style={{ margin: 10, }}
                                    onPress={() => { props.navigation.navigate('Chat', { name }, { group },) }}>
                                    <Text style={{}}>{item}</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }} keyExtractor={(item, index) => index}>
                </FlatList >
                <TouchableOpacity style={styles.Touch}
                    onPress={() => { props.navigation.navigate('Chat') }}
                >
                    <Image style={styles.imag}
                        resizeMode='contain'
                        source={require('../../assets/chat.png')
                        }
                    />
                </TouchableOpacity>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#77B0D1',
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
        fontWeight: 'bold',
        marginLeft: 50,
        marginTop: 45,
        fontSize: 25,
        fontFamily: 'serif',
        color: '#2882B6'
    },
    withName: {
        width: '60%',
        backgroundColor: '#2882B6',
        pading: 5,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        margin: 5,
        marginRight: 10,
        alignSelf: 'flex-end',
        borderWidth: 7,
        borderColor: '#2882B6'
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
        marginLeft: 300,
        marginBottom: 30
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