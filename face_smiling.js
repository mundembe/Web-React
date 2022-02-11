import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 70;
const eyeRadius = 30;
const mouthWidth = 100;
const mouthRadius = 20;

const mouthArc = d3.arc()
    .innerRadius(mouthWidth)
    .outerRadius(mouthWidth + mouthRadius)
    .startAngle(Math.PI / 2 + 0.2)
    .endAngle(Math.PI * 3/2 - 0.2);

const App = () => (
    <svg width={width} height={height}>
    	<g transform={`translate(${centerX},${centerY})`} >
        <circle
          r={centerY - (strokeWidth / 2)}
          fill="yellow"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <circle 
          cx={-eyeOffsetX}
          cy={-eyeOffsetY}
          r={eyeRadius}
        />
        <circle 
          cx={+eyeOffsetX}
          cy={-eyeOffsetY}
          r={eyeRadius}
        />
        <path d={mouthArc()}/>
      </g>
    </svg>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
