import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import questionsReducer, { QuestionReducerState } from './questionReducer';

export interface ReduxState {
  question: QuestionReducerState;
  firestore: any;
}

const rootReducer = combineReducers({
  question: questionsReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
