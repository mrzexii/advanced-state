import { combineReducers } from 'redux';

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  return state;
}

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case 'SET_QUIZ':
      return action.quiz;
    default:
      return state;
  }
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state;
}

const initialMessageState = '';
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case 'SET_MESSAGE':
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
    case 'INPUT_CHANGE':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return initialFormState;
    default:
      return state;
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form });
