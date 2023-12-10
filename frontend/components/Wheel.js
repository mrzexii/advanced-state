import React from 'react'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'

export default function Wheel(props) {

const Wheel = (props) => {
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
        {props.wheelState.map(item => {
         return <div key={item.wheelIndex} className={item.cogState} style={{ "--i": item.wheelIndex }}>{item.wheelValue}</div>
        })}
      </div>
      {/* --i is a custom CSS property, no need to touch that nor the style object */}

      <div id="keypad">
        <button id="counterClockwiseBtn" >Counter clockwise</button>
        <button id="clockwiseBtn">Clockwise</button>
        <button id="counterClockwiseBtn" onClick={() => props.moveCounterClockwise()}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={() => props.moveClockwise()}>Clockwise</button>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    wheelState: state.wheel.wheelState
  }
}

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel);
