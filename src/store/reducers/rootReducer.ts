import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import { Question } from 'types/Question';

export interface QuestionsState {
  questions: Question[];
}

export interface ReduxState {
  question: QuestionsState;
  firestore: any;
}

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
