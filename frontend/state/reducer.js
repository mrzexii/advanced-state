import { combineReducers } from 'redux';
import * as actionTypes from './action-types';

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case actionTypes.MOVE_CLOCKWISE:
      // Handle clockwise movement
      return state; // Modify this based on your logic
    case actionTypes.MOVE_COUNTERCLOCKWISE:
      // Handle counter-clockwise movement
      return state; // Modify this based on your logic
    default:
      return state;
  }
}

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case actionTypes.SET_QUIZ_INTO_STATE:
      return action.quizData;
    default:
      return state;
  }
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case actionTypes.SET_SELECTED_ANSWER:
      return action.answer;
    default:
      return state;
  }
}

const initialMessageState = '';
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case actionTypes.SET_INFO_MESSAGE:
      return action.message;
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
};
function form(state = initialFormState, action) {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      // Handle input change
      return { ...state, [action.field]: action.value };
    case actionTypes.RESET_FORM:
      return initialFormState;
    default:
      return state;
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form });

