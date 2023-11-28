// action-creators.js
import axios from 'axios';

// Synchronous action creators
export const moveClockwise = () => ({ type: 'MOVE_CLOCKWISE' });
export const moveCounterClockwise = () => ({ type: 'MOVE_COUNTERCLOCKWISE' });
export const setQuizIntoState = (quiz) => ({ type: 'SET_QUIZ_INTO_STATE', payload: quiz });
export const setSelectedAnswer = (answer) => ({ type: 'SET_SELECTED_ANSWER', payload: answer });
export const setInfoMessage = (message) => ({ type: 'SET_INFO_MESSAGE', payload: message });
export const inputChange = (value) => ({ type: 'INPUT_CHANGE', payload: value });
export const resetForm = () => ({ type: 'RESET_FORM' });

// Asynchronous action creators
export const fetchQuiz = () => {
  return async function (dispatch) {
    dispatch({ type: 'RESET_QUIZ_STATE' });

    try {
      const response = await axios.get('http://localhost:9000/api/quiz/next');
      dispatch({ type: 'FETCH_QUIZ_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_QUIZ_ERROR', payload: error.message });
    }
  };
};

export const postAnswer = (answerData) => {
  return async function (dispatch) {
    try {
      await axios.post('http://localhost:9000/api/quiz/answer', answerData);
      dispatch({ type: 'RESET_SELECTED_ANSWER_STATE' });
      dispatch({ type: 'SET_SERVER_MESSAGE', payload: 'Answer submitted successfully' });
      dispatch(fetchQuiz());
    } catch (error) {
      dispatch({ type: 'POST_ANSWER_ERROR', payload: error.message });
    }
  };
};

export const postQuiz = (quizData) => {
  return async function (dispatch) {
    try {
      await axios.post('http://localhost:9000/api/quiz/new', quizData);
      dispatch({ type: 'SET_CORRECT_MESSAGE', payload: 'Quiz created successfully' });
      dispatch({ type: 'RESET_FORM_STATE' });
    } catch (error) {
      dispatch({ type: 'POST_QUIZ_ERROR', payload: error.message });
    }
  };
};

