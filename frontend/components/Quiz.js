export default function Quiz(props) {
import { connect } from 'react-redux'
import { fetchQuiz, selectAnswer, postAnswer } from '../state/action-creators'
function Quiz(props) {
  if (!props.isFetching) {
    props.fetchQuiz();
  }
  //NEXT STEP HANDLE CLICK
  return (
    <div id="wrapper">

      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
        props.isFetching ? (
          <>
            <h2>What is a closure?</h2>

            <h2>{props.quiz.question}</h2>
            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
              {props.quiz.answers.map((answer, ind) => {
                return <div key={answer.text} className={props.quiz.answers[ind].answerHighlight ? "answer selected" : "answer"}>{answer.text}
                  <button onClick={() => props.selectAnswer(answer.answer_id)}>{props.quiz.answers[ind].selectValue}</button>
                </div>
              })}
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
            <button id="submitAnswerBtn" disabled={props.buttonState} onClick={() => props.postAnswer(props.quiz)}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz.quiz,
    isFetching: state.quiz.isFetching,
    error: state.quiz.error,
    buttonState: state.quiz.buttonState
  }
}

export default connect(mapStateToProps, { fetchQuiz, selectAnswer, postAnswer })(Quiz);
