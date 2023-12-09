import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

function Form(props) {
  const { newQuestion, newTrueAnswer, newFalseAnswer, inputChange, postQuiz } = props;

  const onChange = (evt) => {
    inputChange(evt.target.id, evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    postQuiz();
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" value={newQuestion} placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" value={newTrueAnswer} placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" value={newFalseAnswer} placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={!newQuestion.trim() || !newTrueAnswer.trim() || !newFalseAnswer.trim()}>
        Submit new quiz
      </button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  newQuestion: state.form.newQuestion,
  newTrueAnswer: state.form.newTrueAnswer,
  newFalseAnswer: state.form.newFalseAnswer,
});

export default connect(mapStateToProps, actionCreators)(Form);
