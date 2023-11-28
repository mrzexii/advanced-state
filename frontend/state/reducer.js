// reducer.js
import { combineReducers } from 'redux';

const initialWheelState = 0;
const initialQuizState = null;
const initialSelectedAnswerState = null;
const initialMessageState = '';
const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
};

function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case 'MOVE_CLOCKWISE':
      return state; // Replace with your logic
    case 'MOVE_COUNTERCLOCKWISE':
      return state; // Replace with your logic
    default:
      return state;
  }
}

function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case 'SET_QUIZ_INTO_STATE':
      return action.payload; // Replace with your logic
    default:
      return state;
  }
}

function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case 'SET_SELECTED_ANSWER':
      return action.payload; // Replace with your logic
    default:
      return state;
  }
}

function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case 'SET_INFO_MESSAGE':
      return action.payload; // Replace with your logic
    default:
      return state;
  }
}

function form(state = initialFormState, action) {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.value }; // Replace with your logic
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});

export default rootReducer;

