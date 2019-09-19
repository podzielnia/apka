import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import { Question } from 'types/Question';
import { scoreReducer, ScoreState } from './scoreReducer';

export interface QuestionsState {
  questions: Question[];
}

export interface ReduxState {
  question: QuestionsState;
  firestore: any;
  score: ScoreState;
}

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  score: scoreReducer,
});

export default rootReducer;
