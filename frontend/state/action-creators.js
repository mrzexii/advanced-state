// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() { }

export function moveCounterClockwise() { }

export function selectAnswer() { }

export function setMessage() { }

export function setQuiz() { }

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
// Async action creators

export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    dispatch(setMessage("Loading next quiz..."));

    // Fetch the next quiz from the server
    fetch("http://localhost:9000/api/quiz/next")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch quiz");
        }
        return response.json();
      })
      .then((quiz) => {
        // On successful GET, dispatch an action to send the obtained quiz to its state
        dispatch(setQuiz(quiz));
      })
      .catch((error) => {
        // On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
        console.error("Error fetching quiz:", error);
        dispatch(setMessage("Error loading quiz"));
      });
  };
}

export function postAnswer(answer) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    fetch("http://localhost:9000/api/quiz/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answer),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to post answer");
        }
        return response.json();
      })
      .then((feedback) => {
        // On successful POST, dispatch actions accordingly
        dispatch(resetForm());
        dispatch(setMessage(feedback.message));
        dispatch(fetchQuiz());
      })
      .catch((error) => {
        // On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
        console.error("Error posting answer:", error);
        dispatch(setMessage("Error posting answer"));
      });
  };
}

export function postQuiz(formData) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the appropriate state
    // - Dispatch the resetting of the form
    fetch("http://localhost:9000/api/quiz/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to post new quiz");
        }
        return response.json();
      })
      .then((newQuiz) => {
        // On successful POST, dispatch actions accordingly
        dispatch(setMessage("Quiz created successfully"));
        dispatch(resetForm());
      })
      .catch((error) => {
        // On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
        console.error("Error posting new quiz:", error);
        dispatch(setMessage("Error posting new quiz"));
      });
  };
}
