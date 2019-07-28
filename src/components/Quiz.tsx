import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { ReduxState } from 'store/reducers/rootReducer';
import { Question } from '../types/Question';
import Loading from './Loading';
import QuestionContainer from './QuestionContainer';

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const getRandomQuestionsPool = (questions: Question[]): Question[] =>
  shuffle<Question>([...questions]).slice(0, 9);

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
        questionsPool: getRandomQuestionsPool(this.props.questions),
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

  goToNextQuestion = () => {
    const currentQuestionIndex = this.state.currentQuestionIndex + 1;
    this.setState({ currentQuestionIndex });
  };

  render() {
    const question = this.getCurrentQuestion();

    return question ? (
      <QuestionContainer
        question={question}
        questionNumber={this.state.currentQuestionIndex + 1}
        questionsTotalNumber={this.state.questionsPool.length}
        onAnswerPick={this.goToNextQuestion}
      />
    ) : (
      <Loading />
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
