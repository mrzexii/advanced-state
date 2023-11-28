// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() { }

export function moveCounterClockwise() { }

export function selectAnswer() { }

export function setMessage() { }

export function setQuiz() { }

export function inputChange() { }

export function resetForm() { }

import axios from 'axios';

export function fetchQuiz() {
  return async function (dispatch) {
    // Dispatch an action to reset the quiz state
    dispatch({ type: 'RESET_QUIZ_STATE' });

    try {
      // Make a GET request to fetch the next quiz
      const response = await axios.get('http://localhost:9000/api/quiz/next');

      // Dispatch an action to send the obtained quiz to its state
      dispatch({ type: 'FETCH_QUIZ_SUCCESS', payload: response.data });
    } catch (error) {
      // On error, dispatch an action to handle the error
      dispatch({ type: 'FETCH_QUIZ_ERROR', payload: error.message });
    }
  };
}

export function postAnswer(answerData) {
  return async function (dispatch) {
    try {
      // Make a POST request to submit the answer
      await axios.post('http://localhost:9000/api/quiz/answer', answerData);

      // Dispatch actions for a successful POST
      dispatch({ type: 'RESET_SELECTED_ANSWER_STATE' });
      dispatch({ type: 'SET_SERVER_MESSAGE', payload: 'Answer submitted successfully' });

      // Dispatch the fetching of the next quiz
      dispatch(fetchQuiz());
    } catch (error) {
      // On error, dispatch an action to handle the error
      dispatch({ type: 'POST_ANSWER_ERROR', payload: error.message });
    }
  };
}

export function postQuiz(quizData) {
  return async function (dispatch) {
    try {
      // Make a POST request to create a new quiz
      await axios.post('http://localhost:9000/api/quiz/new', quizData);

      // Dispatch actions for a successful POST
      dispatch({ type: 'SET_CORRECT_MESSAGE', payload: 'Quiz created successfully' });
      dispatch({ type: 'RESET_FORM_STATE' });
    } catch (error) {
      // On error, dispatch an action to handle the error
      dispatch({ type: 'POST_QUIZ_ERROR', payload: error.message });
    }
  };
}

