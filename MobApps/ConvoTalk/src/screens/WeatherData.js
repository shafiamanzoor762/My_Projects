// Core Components
import { useState } from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ActivityIndicator, Image, ImageBackground, KeyboardAvoidingView, ScrollView, FlatList } from "react-native";
// Custom Components
import TxtInp from '../components/TextInp';
import Butt from "../components/Button";
import Card from "../components/Card";

import axios from 'axios'

import DisplayWeatherIcon from "../components/WeatherIcon";

function WeatherTrig() {

    const [city, setCity] = useState(null);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    const [loading, setLoading] = useState(false);

    const [icon, setIcon] = useState('');

    const [descrip, setDescrip] = useState(false);
    const [temp, setTemp] = useState(false);
    const [humidity, setHumidity] = useState(null);
    const [pressure, setPressure] = useState(null);

    const [weatherData, setWeatherData] = useState([]);
    

    const onSearchPressed = async () => {
        setLoading(true);
        let urlCurr;
        let urlForcast;

        if (city) {
            console.log('City')
            urlCurr = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=23cd260e0ee898425b90f241974f6775`;
        }
        if (lat && lon) {
            console.log('Latitude|Longitude')
            urlForcast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=3409e9362bc4492201f2ac58685cc090`;
        }
        // Current Weather
        let responseCurr = await axios.get(urlCurr);
        console.log(responseCurr.data);
        setIcon(responseCurr.data.weather[0].icon);

        setDescrip(responseCurr.data.weather[0].description);
        setTemp(responseCurr.data.main.temp - 273.15);
        setHumidity(responseCurr.data.main.humidity);
        setPressure(responseCurr.data.main.pressure);

        // Weather Forcasting
        let responseFor = await axios.get(urlForcast);
        let weath = [];


        for (i = 0; i < 6; i++) {
            // console.log(responseFor.data.list[i].main.temp);
            // console.log(responseFor.data.list[i].main.humidity);
            // console.log(responseFor.data.list[i].main.pressure);
            // console.log(responseFor.data.list[i].weather[0].description);
            // console.log(responseFor.data.list[i].dt_txt);
            weath.push(responseFor.data.list[i].main,responseFor.data.list[i].dt_txt);
            for(j=0;j<6;j++)
            weath.push(responseFor.data.list[i].weather[j]);
        }
        setWeatherData(weath);
        console.log(weath);


        // setDescripf(responseFor.data.weather[0].description);
        // console.log('Decscription'+descripf)
        // setTempf(responseFor.data.main.temp - 273.15);
        // setHumidityf(responseFor.data.main.humidity);
        // setPressuref(responseFor.data.main.pressure);

        setLoading(false);
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground style={styles.imagbg}
                resizeMode='contain'
                source={require('../../assets/bg_3.png')}>
                <Text style={styles.txt}>Today's Weather</Text>
                <TxtInp placeholder='    Enter your City name'
                    onChangeText={(text) => setCity(text)}
                />
                <TxtInp placeholder='    Enter latitude'
                    onChangeText={(text) => setLat(text)}
                />
                <TxtInp placeholder='    Enter longitude'
                    onChangeText={(text) => setLon(text)}
                />
                {loading ? <ActivityIndicator color={'blue'} size={'large'} /> : null}
                <Butt title='Find'
                    onPress={() => { onSearchPressed() }}
                />
                <Text style={styles.txt}>City: {city}</Text>
                <Text style={styles.txtdes}>Current Weather Description</Text>

                {/* {icon ? <Image source={require('../../assets/Weather/' + icon + '.png')} /> : null} */}

                {icon && <DisplayWeatherIcon iconPath={icon} />}

                <View style={styles.OpacityWrap}>
                    <View style={{ flexDirection: 'row' }}>
                        {humidity && <Card title='Humidity' data={humidity} />}
                        {pressure && <Card title='Pressure' data={(pressure / 1013.25).toFixed(0) + ' atm'} />}
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {temp && <Card title='Temperature' data={temp.toFixed(0) + '°'} />}
                        {descrip && <Card title='Weather' data={descrip} />}
                    </View>
                </View>
                <Text style={styles.txtdes}>Coming Weather Description</Text>
                <ScrollView horizontal={true}>
                    {/* {humidityf && <Card title='Humidity' data={humidityf} />}
                    {pressuref && <Card title='Pressure' data={pressuref} />}
                    {tempf && <Card title='Temperature' data={tempf.toFixed(0) + '°'} />}
                    {descripf && <Card title='Weather' data={descripf} />} */}
                </ScrollView>
                {/* <FlatList horizontal={true}
        data={weatherData}
        keyExtractor={(item) => item.dt.toString()}
        renderItem={({ item }) => <WeatherItem data={item} />}
      /> */}

                {/* <View style={styles.container}>
      <Text>Temperature: {data.main.temp} K</Text>
      <Text>Description: {data.weather[0].description}</Text>
      <Text>Pressure: {data.main.pressure / 1013.25} atm</Text>
      <Text>Humidity: {data.main.humidity}%</Text>
    </View> */}

            </ImageBackground>
        </KeyboardAvoidingView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#808080',
        width: '100%'
    },
    imagbg: {
        height: '102%',
        width: '102%',
        marginLeft: -6,
        alignItems: 'center',
        justifyContent: 'center',
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
    txtdes: {
        fontSize: 15,
        color: '#525252',
        marginTop: 10,
        marginRight: 130,
        marginLeft: 6
    },
    txtin: {
        fontSize: 15,
        color: 'black',
        fontStyle: 'italic',
        marginTop: 10,
        marginRight: 130,
    },
    img: {
        height: 20,
        width: 20,
        marginTop: -20
    },
    OpacityWrap: {
        backgroundColor: '#2882B6',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: 230,
        width: 300,
        borderRadius: 25
    }
});
export default WeatherTrig;
