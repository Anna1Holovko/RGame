import React, { Component } from 'react';

export default class Box extends Component {
    render() {
        const style = {
            width: '100px',
            height: '100px',
            display: 'inline-block',
            border:'1px solid black',
            backgroundColor: this.props.color
        };
        return <div style={style}></div>
    }
}
