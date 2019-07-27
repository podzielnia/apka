import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { ReduxState } from 'store/reducers/rootReducer';
import { Question } from '../types/Question';
import QuestionContainer from './QuestionContainer';

interface Props {
  questions?: Question[];
}

interface State {
  currentQuestionIndex: number;
  questionsPool: Question[];
}

export class Quiz extends PureComponent<Props, State> {
  state: State = {
    currentQuestionIndex: 0,
    questionsPool: [],
  };

  componentDidUpdate(previousProps: Props) {
    if (!previousProps.questions && this.props.questions) {
      this.setState({
        questionsPool: this.props.questions.slice(0, 9),
        currentQuestionIndex: 0,
      });
    }
  }

  getCurrentQuestion = (): Question | null => {
    const { questionsPool, currentQuestionIndex } = this.state;

    if (!questionsPool) {
      return null;
    }
    return questionsPool[currentQuestionIndex];
  };

  nextQuestion = () =>
    this.setState({
      ...this.state,
      currentQuestionIndex: this.state.currentQuestionIndex + 1,
    });

  render() {
    const question = this.getCurrentQuestion();

    return question ? (
      <>
        <QuestionContainer
          question={question}
          questionNumber={this.state.currentQuestionIndex + 1}
          questionsTotalNumber={this.state.questionsPool.length}
          onAnswerPick={this.nextQuestion}
        />
      </>
    ) : (
      <>LOADING QUESTION</>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {
    questions: state.firestore.ordered.questions,
  };
};

export default compose<any>(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'questions' }]),
)(Quiz);
