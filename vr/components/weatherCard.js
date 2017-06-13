import React, {Component} from 'react';
import { View, Text, Image, StyleSheet } from 'react-vr';

export default class WeatherCard extends Component {
    render() {
        return (
            <View style={styles.weatherCard}>
                <Text style={styles.weatherText}>{this.props.info.name}</Text>
                <Text style={styles.weatherText}>Current Weather: {this.props.info.weather[0].description}</Text>
                <Text style={styles.weatherText}>Temperature: {this.props.info.main.temp}</Text>
                <Text style={styles.weatherText}>Wind Speed: {this.props.info.wind.speed} mph</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    weatherCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        opacity: 0.8,
        borderRadius: 0.1,
        padding: 0.5,
        layoutOrigin: [-0.5, 0],
        transform: [
            {translate: [-3, 0, -7]}
        ]
    },
    weatherText: {
        textAlign: 'center',
        fontSize: 0.3,
        color: '#222'
    }
})