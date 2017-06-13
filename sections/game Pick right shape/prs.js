// All versions and different syles are under /sections/pano

import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text, StyleSheet, AsyncStorage } from 'react-vr';
import Shape, {shapes} from './vr/components/shape'

export default class Basics extends Component {
  constructor() {
    super();

    this.state = {
      score: 0,
      gameShapes: [1,1,1,1],
      odd: 0
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('score')
      .then(value => {
        this.setState({score: value + 1});
      });
    this.newGameSet();
  }

  newGameSet() {
    console.log('New Game');
    let baseShapeId = Math.floor(Math.random() * shapes.length);

    let specialShapeId = baseShapeId;

    while(specialShapeId === baseShapeId) {
      specialShapeId = Math.floor(Math.random() * shapes.length)
    };

    let newGameShapes = [];
    for (let i=0; i<this.state.gameShapes.length; i++) {
      newGameShapes[i] = baseShapeId;
    }
    let specialIndex = Math.floor(Math.random() * shapes.length)
    newGameShapes[specialIndex] = specialShapeId;

    this.setState({gameShapes: newGameShapes, odd: specialIndex});
  }


  render() {
    return (
      <View style={styles.game}>
        <Text
          style={{
            fontSize: 0.2,
            transform: [{translate: [1,0.7,-3]}],
            color: 'red',
            backgroundColor: 'white',
            padding: 0.1,
            textAlign: 'center',
            textAlignVertical: 'center'
          }}>
          Find the Odd Shape!
          Correct: {this.state.score}
        </Text>
        {
          this.state.gameShapes.map((shape, index) => {
            let found = false;
            return (
              <View key={index}
                onEnter={() => {
                    console.log('Entered')
                    if(this.state.odd === index) {
                      found = true;
                      this.setState({score: this.state.score+1});
                      AsyncStorage.setItem('score', this.state.score);
                      this.newGameSet();
                    }
                  }}
              >
                <Shape
                  shapeNum={shape}
                  colorNum={index}
                  transform={[{translate: [(index-1)*1.5, 0, -5]}]}
                  oddIndex={this.state.odd}
                />
              </View>
            )
          })
        }
      </View>
    )
  }
};

const styles = StyleSheet.create({
  game: {
    transform: [
      {translate: [-2.25, 0,0]}
    ]
  },
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