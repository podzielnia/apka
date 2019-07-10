import { combineReducers } from 'redux';

import questionsReducer, { QuestionReducerState } from './questionReducer';

export interface ReduxState {
  question: QuestionReducerState;
}

const rootReducer = combineReducers({
  question: questionsReducer,
});

export default rootReducer;
