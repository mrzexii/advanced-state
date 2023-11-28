import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

function Quiz(props) {
  return (
    <div id="wrapper">
      {props.quiz ? (
        <>
          <h2>{props.quiz.question_text}</h2>
          <div id="quizAnswers">
            {/* ... (map through answers and render JSX accordingly) */}
          </div>
          <button id="submitAnswerBtn" onClick={props.postAnswer}>
            Submit answer
          </button>
        </>
      ) : 'Loading next quiz...'}
    </div>
  );
}

export default connect((state) => ({ quiz: state.quiz }), actionCreators)(Quiz);
