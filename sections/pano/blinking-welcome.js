// All versions and different syles are under /sections/pano

import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text } from 'react-vr';


export default class Basics extends Component {
  constructor() {
    super();

    this.state = {
      showSign: true
    };

    setInterval(() => this.setState({showSign: !this.state.showSign}), 1000)
  }
  render() {
    let message = this.state.showSign === true ? 'Welcome to VR land' : '';

    return (
      <View>
        <Pano source={asset('island-garden.jpg')}></Pano>
        <Text style={{color: 'red', fontWeight: 'bold', fontSize: 0.2, transform: [{translate: [-1,0,-2]}] }}>{message}</Text>
      </View>
    )
  }
};

AppRegistry.registerComponent('Basics', () => Basics);