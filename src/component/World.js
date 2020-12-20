import React from "react";

import { Stage, Layer } from 'react-konva';
import Player from "./Player";

export default class World extends React.Component {
  gameState = {
    lastUpdated: -1,
    dt: 0
  };

  constructor(props) {
    super(props);
    this.layerRef = React.createRef();
    this.playerRef = React.createRef();
  }

  componentDidMount() {
    requestAnimationFrame(this.loop.bind(this));
  }

  loop(currentTime) {
    this.gameState.dt = this.gameState.lastUpdated === -1 ? 
            0 : (currentTime - this.gameState.lastUpdated) / 1000;
    this.gameState.lastUpdated = currentTime;
    if (this.playerRef && this.playerRef.current) {
      this.playerRef.current.update(this.gameState.dt);
    }
    if (this.layerRef && this.layerRef.current) {
      this.layerRef.current.draw();
    }
    requestAnimationFrame(this.loop.bind(this));
  }

  render() {
    return (
      <Stage width={this.props.width} height={this.props.height}>
        <Layer ref={this.layerRef}>
          <Player ref={this.playerRef} dt={this.gameState.dt} width={this.props.width} />
        </Layer>
      </Stage>
    );
  }
}
