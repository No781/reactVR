// All versions and different syles are under /sections/pano

import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text } from 'react-vr';

class Task extends Component {
  render() {
    return (
      <Text style={{textAlign: 'center', fontSize: 0.2}}>Todo: {this.props.text}</Text>
    )
  }
}

export default class Basics extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('lombard-vr.jpg')}></Pano>
        <View
          style={{
            transform: [{translate: [0,0,-3]}],
            layoutOrigin: [0.5, 0.5]
          }}>
            <Task text='Get groceries'></Task>
            <Task  text='Dunno'></Task>
            <Task  text='another'></Task>
        </View>
      </View>
    )
  }
};

AppRegistry.registerComponent('Basics', () => Basics);