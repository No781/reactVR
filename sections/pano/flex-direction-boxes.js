// All versions and different syles are under /sections/pano

import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text, StyleSheet } from 'react-vr';

class Row extends Component {
  constructor() {
    super();
  }
  render () {
    return (
      <View style={[{backgroundColor: this.props.color}, styles.row]}>
        <Text style={styles.text}>{this.props.color}</Text>
      </View>
    )
  }
}

export default class Basics extends Component {
  constructor() {
    super();

    this.state = {
      flexDirectionIsRow: true
    }
    setInterval(() => {
      this.setState({flexDirectionIsRow: !this.state.flexDirectionIsRow})
    }, 1000);
  }
  render() {
    let flexDirection = this.state.flexDirectionIsRow ? 'row' : 'column';

    return (
      <View style={[styles.container, {flexDirection: flexDirection}]}>
        <Pano source={asset('island-garden.jpg')}></Pano>
        <Row color='red'></Row>
        <Row color='blue'></Row>
        <Row color='green'></Row>
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