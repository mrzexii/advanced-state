// ❗ You don't need to add extra action creators to achieve MVP

export function moveClockwise() {
  return {
    type: MOVE_CLOCKWISE,
  };
}

export function moveCounterClockwise() {
  return {
    type: MOVE_COUNTERCLOCKWISE,
  };
}

export function setQuizIntoState(quizData) {
  return {
    type: SET_QUIZ_INTO_STATE,
    payload: quizData,
  };
}

export function setSelectedAnswer(answer) {
  return {
    type: SET_SELECTED_ANSWER,
    payload: answer,
  };
}

export function setInfoMessage(message) {
  return {
    type: SET_INFO_MESSAGE,
    payload: message,
  };
}

export function inputChange(id, value) {
  return {
    type: INPUT_CHANGE,
    payload: { id, value },
  };
}

export function resetForm() {
  return {
    type: RESET_FORM,
  };
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    dispatch(setQuizIntoState(null));

    // Simulate a slow API request
    setTimeout(() => {
      // Mock quiz data (replace with actual API call)
      const quizData = {
        quiz_id: 'LVqUh',
        question_text: 'Sample question',
        answers: [
          { answer_id: '0VEv0', answer_text: 'Option 1' },
          { answer_id: '1JtZ2', answer_text: 'Option 2' },
        ],
      };

      // Dispatch an action to send the obtained quiz to its state
      dispatch(setQuizIntoState(quizData));
    }, 1000); // Simulating a 1-second delay
  };
}

export function postAnswer() {
  return function (dispatch, getState) {
    const state = getState();
    const { selectedAnswer } = state;

    if (selectedAnswer) {
      // On successful POST:
      // - Dispatch an action to reset the selected answer state
      dispatch(setSelectedAnswer(null));

      // - Dispatch an action to set the server message to state
      dispatch(setInfoMessage('Answer submitted successfully'));

      // - Dispatch the fetching of the next quiz
      dispatch(fetchQuiz());
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
      dispatch(setInfoMessage('New quiz submitted successfully'));

      // - Dispatch the resetting of the form
      dispatch(resetForm());

      // - Dispatch the fetching of the next quiz
      dispatch(fetchQuiz());
    } else {
      // Handle error (e.g., form validation)
      console.error('Error: Form validation failed');
    }
  };
}
