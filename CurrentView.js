import { ScrollView, Text, View, StyleSheet, Image } from 'react-native';
import React from 'react';


export default function CurrentView(props) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.cityText}>{props.city}</Text>
            <Text style = {styles.tempText}>{`${props.current.temp}°`}</Text>
            <View style = {styles.mainView}>
                <Text style = {styles.mainText}>{props.current.main}</Text>
                <Image source={{uri: `http://openweathermap.org/img/wn/${props.current.icon}@2x.png`}}
                        style = {styles.icon}/>
            </View>
            <Text style = {styles.highLowText}>{`최고:${props.current.high}° 최저:${props.current.low}°`}</Text>
        </View>
    )
    
}


const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        
    },

    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
    },


    icon: {
        width: 0,
        height: 0,
    },

    tempText: {
        fontSize: 70,
        fontWeight: "300",
        marginVertical: -15
    },
    cityText: {
        fontSize: 30,
        fontWeight: "600"
    },
    mainText: {
        fontSize: 20,
        fontWeight: "300"
    },
    highLowText: {
        fontSize: 20,
        fontWeight: "300"
    }
} )