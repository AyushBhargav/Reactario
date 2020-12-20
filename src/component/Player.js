import React from 'react';

import { Rect } from 'react-konva';

export default class Player extends React.Component {

  constructor(props) {
    super(props);
    this.gameState = {
      x: 20,
      y: 20,
      width: 20,
      color: 'red',
      speed: 50
    };
  }

  update(dt) {
    const nx = (this.gameState.x + this.gameState.speed * dt) % this.props.width;
    this.gameState = Object.assign({}, this.gameState, {x: nx});
    this.setState(this.gameState);
  }

  render() {
    
    return (
      <Rect x={this.gameState.x} y={this.gameState.y} width={this.gameState.width} 
            height={this.gameState.width} fill={this.gameState.color} />
    )
  }

}