// All versions and different syles are under /sections/pano

import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text, StyleSheet, Box } from 'react-vr';

export default class Basics extends Component {
  constructor() {
    super();

    this.state = {
      fontSize: 0.1
    }
  }


  render() {
    return (
      <View >
        <Pano source={asset('island-garden.jpg')}></Pano>
        <Text
          onEnter={() => {this.setState({fontSize: 0.2}); console.log('hovered')}}
          onExit={() => {this.setState({fontSize: 0.1}); console.log('exit')}}
          style={{
            fontSize: this.state.fontSize,
            transform: [{translate: [0,0,-1]}]
          }}
        >
          Hover here!!
        </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 0.2,
    textAlign: 'center'
  },
  row: {
    width: 0.5,
    height: 0.3,
    margin: 0.1
  },
  container: {
    flex: 1,
    width: 2,
    alignItems: 'center',
    transform: [{translate: [-1, 0, -3]}]
  }
})

AppRegistry.registerComponent('Basics', () => Basics);