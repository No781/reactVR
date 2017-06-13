import React, {Component} from 'react';
import { Box, Sphere, Cylinder} from 'react-vr';

export const shapes = [Box,Sphere,Cylinder]

export default class Shape extends Component {
    render() {
        let Component = shapes[this.props.shapeNum];
        let colors = ['#c44', '#3c3', '#33c', '#ccc']

        return (
            <Component
                wireframe={true}
                style={{
                    color: colors[this.props.colorNum],
                    transform: this.props.transform
                }} />
        )
    }
}