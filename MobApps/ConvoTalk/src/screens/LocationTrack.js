// Core Components
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
// Hook's
import { useState, useEffect } from "react";
// Track Location
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';

// render navigation built-in fnts
import { useNavigation } from '@react-navigation/native';

function TrackLoc(props) {

    const [currentLocation, setCurrentLocation] = useState(null);
    const [watchLocation, setWatchLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                alert(errorMsg);
                return;
            }

            let location = await Location.getCurrentPositionAsync();
            setCurrentLocation(location);
            console.log(JSON.stringify(currentLocation));
            console.log(JSON.stringify(location));

            let loc = await Location.watchPositionAsync({
                accuracy: Location.Accuracy.Highest,
                distanceInterval: 1,
                timeInterval: 50
            });
            setWatchLocation(loc);
            console.log(JSON.stringify(loc));
        }
        )();
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.Bac}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={{ fontSize: 35, marginTop: -15, marginRight: 3, }}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Your Location</Text>
            </View>
            <MapView
                provider='google'
                showMyLocationButton={true}
                showsUserLocation={true}
                style={{
                    width: '90%',
                    height: '85%',
                    borderColor: 'black',
                    borderWidth: 10,
                    margin: 18
                }}>
                {/* {currentLocation.coords ? <Marker
                    // type LatLng={{
                    //     latitude: currentLocation.coords.latitude,
                    //     longitude: currentLocation.coords.longitude,
                    // }}
                    pinColor='pink'
                    tracksViewChanges={true}
                    icon={require('../../assets/Logo.png') }
                    // anchor={{ x: 0, y: 0 }}
                    coordinate={{
                        latitude: currentLocation.coords.latitude,
                        longitude: currentLocation.coords.longitude,
                    }}
                    title={'My Location'}
                    description={'Convo Talk 1'} /> : null} */}
            </MapView>
        </View>
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
    header: {
        flexDirection: 'row',
        backgroundColor: '#2882B6',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderColor: 'pink',
        shadowColor: '#0000cd',
        elevation: 15,
        width: '97%',
    },
    Bac: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        backgroundColor: '#dbd7d2',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 40,
        shadowColor: '#0000cd',
        elevation: 15,
    },
    headerTxt: {
        alignSelf: 'center',
        fontWeight: '800',
        marginLeft: 50,
        marginTop: 45,
        fontSize: 20,
        fontFamily: 'serif',
    },
});
export default TrackLoc;