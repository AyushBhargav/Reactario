import ColoredRect from './component/ColoredRect';

import { Stage, Layer, Text } from 'react-konva';

function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Click on Rect BUDDY!!!" />
        <ColoredRect />
      </Layer>
    </Stage>
  );
}

export default App;
