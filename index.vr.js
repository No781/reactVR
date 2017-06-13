import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text, Model, Animated } from 'react-vr';
import WeatherCard from './vr/components/weatherCard'
import WindCloud from './vr/components/windCloud'

const APIkey = 'e1256071a0fa8e99c15a559922862011';

export default class WeatherSimulator extends Component {
  constructor() {
    super();

    this.state = {
      weatherObject: {
        name: '',
        main: {
          temp: 0
        },
        weather: [
          {description: ''}
        ],
        wind: {
          deg: 1,
          speed: 1
        }
      }
    }
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Pfungen&appid=${APIkey}`, {method: 'GET'})
      .then(response => response.json())
      .then(json => this.setState({weatherObject: json}));
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Pano source={asset('starry-sky.jpg')}></Pano>
        <WeatherCard info={this.state.weatherObject} ></WeatherCard>
        <WindCloud wind={this.state.weatherObject.wind}></WindCloud>
      </View>
    )
  }
}
AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator)