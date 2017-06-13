// All versions and different syles are under /sections/pano

import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text, StyleSheet, Box } from 'react-vr';

export default class Basics extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false,
      pano: 'zion-vr.jpg'
    }
  }


  render() {
    let showMenu = this.state.menuOpen ? 1 : 0;
    return (
      <View >
        <Pano source={asset(this.state.pano)}></Pano>
        <Text
          onEnter={() => {
            this.setState({menuOpen: true});
            console.log('hovered');
            setTimeout(() => this.setState({menuOpen: !this.state.menuOpen}), 5000);
          }}
          style={{
            fontSize: this.state.fontSize,
            transform: [{translate: [0,0,-1]}],
            color: 'coral'
          }}
        >
          Menu
        </Text>
        <View style={{
          opacity: showMenu,
          flex: 1,
          flexDirection: 'row',
          transform: [{translate: [-1, 1, -3]}],
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>
          <Text style={styles.menuCircle} onEnter={() => {
            this.setState({pano: 'museum.jpg'});
          }}>Somewhere</Text>
          <Text style={styles.menuCircle}>Another Place</Text>
        </View>
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
  },
  menuCircle: {
    width: 0.5,
    height: 0.5,
    borderRadius: 50,
    textAlign: 'center',
    margin: 0.3,
    backgroundColor: 'white',
    color: 'red',
    alignSelf: 'center',
    textAlignVertical: 'center'
  }
})

AppRegistry.registerComponent('Basics', () => Basics);