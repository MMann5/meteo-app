import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native'

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`

export default function Weather({ forecast }) {
    return (
        <View style={styles.container}>
            <Text>{forecast.hour}h</Text>
            <Image style={styles.image} source={{ uri: getIcon(forecast?.icon) }} />
            <Text style={styles.temp}>{forecast.temp}°C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 200,
        width: '99%',
        paddingVertical: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 50,
        margin: '1%'
    },
    image: {
        width: 80,
        height: 80,
    },
    temp: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})