// action-creators.js
import axios from 'axios';

// ... (existing action creators)

export function fetchQuiz() {
  return async function (dispatch) {
    dispatch({ type: 'RESET_QUIZ_STATE' });

    try {
      const response = await axios.get('http://localhost:9000/api/quiz/next');
      dispatch({ type: 'FETCH_QUIZ_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_QUIZ_ERROR', payload: error.message });
    }
  };
}

export function postAnswer(answerData) {
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
}

export function postQuiz(quizData) {
  return async function (dispatch) {
    try {
      await axios.post('http://localhost:9000/api/quiz/new', quizData);
      dispatch({ type: 'SET_CORRECT_MESSAGE', payload: 'Quiz created successfully' });
      dispatch({ type: 'RESET_FORM_STATE' });
    } catch (error) {
      dispatch({ type: 'POST_QUIZ_ERROR', payload: error.message });
    }
  };
}

