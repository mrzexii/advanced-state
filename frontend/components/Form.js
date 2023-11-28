// Form.js
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

function Form(props) {
  const onChange = (evt) => {
    // Implement your onChange logic here
  };

  const onSubmit = (evt) => {
    // Implement your onSubmit logic here
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  );
}

export default connect((state) => state, actionCreators)(Form);
