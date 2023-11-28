import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

function Wheel(props) {
  return (
    <div id="wrapper">
      <div id="wheel">
        {/* ... (previous JSX) */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={props.moveCounterClockwise}>
          Counter clockwise
        </button>
        <button id="clockwiseBtn" onClick={props.moveClockwise}>
          Clockwise
        </button>
      </div>
    </div>
  );
}

export default connect(null, actionCreators)(Wheel);
