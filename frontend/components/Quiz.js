// ... (unchanged code)

function Quiz(props) {
  const { quiz, selectedAnswer, selectAnswer, postAnswer } = props;

  const onAnswerClick = (answerId) => {
    selectAnswer(answerId);
  };

  const onSubmitAnswer = () => {
    postAnswer();
  };

  return (
    <div id="wrapper">
      {quiz ? (
        <>
          <h2>{quiz.question_text}</h2>
          <div id="quizAnswers">
            {quiz.answers.map((answer) => (
              <div
                key={answer.answer_id}
                className={`answer ${selectedAnswer === answer.answer_id ? 'selected' : ''}`}
                onClick={() => onAnswerClick(answer.answer_id)}
              >
                {answer.answer_text}
                <button>{selectedAnswer === answer.answer_id ? 'SELECTED' : 'Select'}</button>
              </div>
            ))}
          </div>
          <button id="submitAnswerBtn" disabled={!selectedAnswer} onClick={onSubmitAnswer}>
            Submit answer
          </button>
        </>
      ) : (
        'Loading next quiz...'
      )}
    </div>
  );
}

export default connect((state) => state, actionCreators)(Quiz);
