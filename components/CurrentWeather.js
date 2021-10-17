import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { isSameDay } from 'date-fns';

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`

export default function CurrentWeather({ data }) {
    const [currentWeather, setCurrentWeather] = useState(null)
    useEffect(() => {
        const currW = data.list.filter(forecast => {
            const today = new Date().getTime() + Math.abs(data.city.timezone * 1000);
            const forecastDate = new Date(forecast.dt) * 1000
            return isSameDay(today, forecastDate)
        })
        setCurrentWeather(currW[0])
    }, [data])
    return (
        <View style={styles.container}>
            <Text style={styles.city}>{data?.city?.name}</Text>
            <Text style={styles.today}>Aujoud'hui</Text>
            <Image style={styles.image} source={{ uri: getIcon(currentWeather?.weather[0].icon) }} />
            <Text style={styles.temperature}>{Math.round(currentWeather?.main.temp)}°C</Text>
            <Text style={styles.description}>{currentWeather?.weather[0].description}</Text>
        </View>
    )
}

const COLOR = '#54567B'

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginBottom: 60,
        alignItems: 'center',

    },
    city: {
        fontSize: 36,
        fontWeight: '500',
        color: COLOR
    },
    today: {
        fontSize: 24,
        fontWeight: '300',
        color: COLOR
    },
    image: {
        width: '150px',
        height: '150px',
        marginVertical: 20
    },
    temperature: {
        fontSize: 80,
        fontWeight: 'bold',
        color: COLOR
    },
    description: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLOR
    }
})