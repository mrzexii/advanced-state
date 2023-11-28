// reducer.js
const initialState = {
  // Your initial state properties go here
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Add your case statements for different action types
    case 'MOVE_CLOCKWISE':
      // Handle MOVE_CLOCKWISE action
      return state;
    case 'MOVE_COUNTERCLOCKWISE':
      // Handle MOVE_COUNTERCLOCKWISE action
      return state;
    case 'SET_QUIZ_INTO_STATE':
      // Handle SET_QUIZ_INTO_STATE action
      return state;
    case 'SET_SELECTED_ANSWER':
      // Handle SET_SELECTED_ANSWER action
      return state;
    case 'SET_INFO_MESSAGE':
      // Handle SET_INFO_MESSAGE action
      return state;
    case 'INPUT_CHANGE':
      // Handle INPUT_CHANGE action
      return state;
    case 'RESET_FORM':
      // Handle RESET_FORM action
      return state;
    case 'RESET_QUIZ_STATE':
      // Handle RESET_QUIZ_STATE action
      return state;
    case 'FETCH_QUIZ_SUCCESS':
      // Handle FETCH_QUIZ_SUCCESS action
      return state;
    case 'FETCH_QUIZ_ERROR':
      // Handle FETCH_QUIZ_ERROR action
      return state;
    case 'RESET_SELECTED_ANSWER_STATE':
      // Handle RESET_SELECTED_ANSWER_STATE action
      return state;
    case 'SET_SERVER_MESSAGE':
      // Handle SET_SERVER_MESSAGE action
      return state;
    case 'POST_ANSWER_ERROR':
      // Handle POST_ANSWER_ERROR action
      return state;
    case 'SET_CORRECT_MESSAGE':
      // Handle SET_CORRECT_MESSAGE action
      return state;
    case 'RESET_FORM_STATE':
      // Handle RESET_FORM_STATE action
      return state;
    case 'POST_QUIZ_ERROR':
      // Handle POST_QUIZ_ERROR action
      return state;
    default:
      return state;
  }
};

export default reducer;

