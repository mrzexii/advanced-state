import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

function Quiz(props) {
  const { quiz, selectedAnswer } = props;

  return (
    <div id="wrapper">
      {quiz ? (
        <>
          <h2>{quiz.question_text}</h2>
          <div id="quizAnswers">
            {quiz.answers.map((answer) => (
              <div key={answer.answer_id} className={`answer ${selectedAnswer === answer.answer_id ? 'selected' : ''}`}>
                {answer.answer_text}
                <button>Select</button>
              </div>
            ))}
          </div>
          <button id="submitAnswerBtn" disabled={!selectedAnswer}>
            Submit answer
          </button>
        </>
      ) : (
        'Loading next quiz...'
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  quiz: state.quiz,
  selectedAnswer: state.selectedAnswer,
});

export default connect(mapStateToProps, actionCreators)(Quiz);
