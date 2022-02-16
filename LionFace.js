import React from 'react';
import ReactDOM from 'react-dom';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 70;
const eyeRadius = 30;
const snoutOffset = eyeOffsetX - 50;

const App = () => (
    <svg width={width} height={height}>
    // ears
    	<circle 
        cx={centerX - 220}
        cy={centerY - eyeOffsetY - 70}
        r={2.5*eyeRadius}
        fill="black"
        stroke="orange"
        strokeWidth="30"
      />
    <circle 
        cx={centerX + 220}
        cy={centerY - eyeOffsetY - 70}
        r={2.5*eyeRadius}
        fill="black"
        stroke="orange"
        strokeWidth="30"
      />
    // face
    	<circle 
        cx={centerX}
        cy={centerY}
        r={centerY - (strokeWidth / 2)}
        fill="orange"
        stroke="brown"
        strokeWidth={strokeWidth}
      />
    // eyes
    	<circle 
        cx={centerX - eyeOffsetX}
        cy={centerY - eyeOffsetY}
        r={eyeRadius}
			/>
      <circle 
        cx={centerX + eyeOffsetX}
        cy={centerY - eyeOffsetY}
        r={eyeRadius}
      />
    // mouth
    	<circle 
        cx={centerX}
        cy={centerY + eyeOffsetY + 50}
        r={eyeRadius}
        fill="red"
      />
    //snouts
    	<circle 
        cx={centerX + snoutOffset}
        cy={centerY + eyeOffsetY}
        r={2 * eyeRadius}
        fill="white"
      />
    	// spots on snout
    	<circle 
        cx={centerX + snoutOffset}
        cy={centerY + eyeOffsetY}
        r={eyeRadius / 4}
        fill="black"
      />
    	<circle 
        cx={centerX + snoutOffset + 30}
        cy={centerY + eyeOffsetY + 30}
        r={eyeRadius / 4}
        fill="black"
      />
    	<circle 
        cx={centerX - snoutOffset}
        cy={centerY + eyeOffsetY}
        r={2 * eyeRadius}
        fill="white"
      />
    	// spots on snout
    	<circle 
        cx={centerX - snoutOffset}
        cy={centerY + eyeOffsetY}
        r={eyeRadius / 4}
        fill="black"
      />
    	<circle 
        cx={centerX - snoutOffset - 30}
        cy={centerY + eyeOffsetY + 30}
        r={eyeRadius / 4}
        fill="black"
      />
    // nose
    	<polygon 
         points="440,270 520,270 520,290 500,310 460,310 440,290"
         fill="brown" stroke="black"
    	/>
    // brows
    	<polygon 
         points="370,90 590,90 520,130 440,130"
         fill="white" stroke="black"
    	/>
    </svg>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
