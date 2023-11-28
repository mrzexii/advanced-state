// Quiz.js
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

function Quiz(props) {
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz.question_text}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {props.quiz.true_answer_text}
                <button>SELECTED</button>
              </div>

              <div className="answer">
                {props.quiz.false_answer_text}
                <button>Select</button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  );
}

export default connect((state) => state, actionCreators)(Quiz);

