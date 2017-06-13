// All versions and different syles are under /sections/pano

import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text, StyleSheet, Box } from 'react-vr';

export default class Basics extends Component {
  constructor() {
    super();

    this.state = {
    }
  }
  render() {

    return (
      <View >
        <Pano source={asset('island-garden.jpg')}></Pano>
        <Box
          dimWidth={0.5}
          dimHeight={0.5}
          dimDepth={0.5}
          wireframe={true}
          style={{
            color: 'red',
            transform: [
              {translate: [0,0,-1]},
              {rotateY: 45},
              {rotateZ: 45}
              ]}}
          >
        </Box>
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