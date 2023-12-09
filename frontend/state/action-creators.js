import axios from 'axios';
import * as actionTypes from './action-types';

export function moveClockwise() {
  return {
    type: actionTypes.MOVE_CLOCKWISE,
  };
}

export function moveCounterClockwise() {
  return {
    type: actionTypes.MOVE_COUNTERCLOCKWISE,
  };
}

export function selectAnswer(answerId) {
  return {
    type: actionTypes.SET_SELECTED_ANSWER,
    payload: answerId,
  };
}

export function setMessage(message) {
  return {
    type: actionTypes.SET_INFO_MESSAGE,
    payload: message,
  };
}

export function setQuiz(quizData) {
  return {
    type: actionTypes.SET_QUIZ_INTO_STATE,
    payload: quizData,
  };
}

export function inputChange(id, value) {
  return {
    type: actionTypes.INPUT_CHANGE,
    payload: { id, value },
  };
}

export function resetForm() {
  return {
    type: actionTypes.RESET_FORM,
  };
}

// Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    dispatch(setQuiz(null));

    // Simulate a slow API request
    axios.get('http://localhost:9000/api/quiz/next')
      .then(response => {
        // On successful GET:
        // - Dispatch an action to send the obtained quiz to its state
        dispatch(setQuiz(response.data));
      })
      .catch(error => {
        console.error('Error fetching quiz:', error);
        // Handle error (e.g., log statements, breakpoints, and appropriate error message)
      });
  };
}

export function postAnswer() {
  return function (dispatch, getState) {
    const state = getState();
    const { selectedAnswer } = state;

    if (selectedAnswer) {
      // On successful POST:
      // - Dispatch an action to reset the selected answer state
      dispatch(selectAnswer(null));

      // - Dispatch an action to set the server message to state
      dispatch(setMessage('Answer submitted successfully'));

      // - Dispatch the fetching of the next quiz
      dispatch(fetchQuiz());

      // Simulate a slow API request for submitting answer
      axios.post('http://localhost:9000/api/quiz/answer', {
        quiz_id: state.quiz.quiz_id,
        answer_id: selectedAnswer,
      })
        .then(response => {
          // Handle the response if necessary
        })
        .catch(error => {
          console.error('Error submitting answer:', error);
          // Handle error (e.g., log statements, breakpoints, and appropriate error message)
        });
    } else {
      // Handle error (e.g., no selected answer)
      console.error('Error: No selected answer');
    }
  };
}

export function postQuiz() {
  return function (dispatch, getState) {
    const state = getState();
    const { newQuestion, newTrueAnswer, newFalseAnswer } = state.form;

    if (newQuestion.trim() && newTrueAnswer.trim() && newFalseAnswer.trim()) {
      // On successful POST:
      // - Dispatch the correct message to the appropriate state
      dispatch(setMessage('New quiz submitted successfully'));

      // - Dispatch the resetting of the form
      dispatch(resetForm());

      // - Dispatch the fetching of the next quiz
      dispatch(fetchQuiz());

      // Simulate a slow API request for submitting new quiz
      axios.post('http://localhost:9000/api/quiz/new', {
        question_text: newQuestion,
        true_answer_text: newTrueAnswer,
        false_answer_text: newFalseAnswer,
      })
        .then(response => {
          // Handle the response if necessary
        })
        .catch(error => {
          console.error('Error submitting new quiz:', error);
          // Handle error (e.g., log statements, breakpoints, and appropriate error message)
        });
    } else {
      // Handle error (e.g., form validation)
      console.error('Error: Form validation failed');
    }
  };
}
