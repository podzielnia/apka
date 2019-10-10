import { combineReducers } from 'redux';

import { scoreReducer, ScoreState } from './scoreReducer';

export interface ReduxState {
  score: ScoreState;
}

const rootReducer = combineReducers({
  score: scoreReducer,
});

export default rootReducer;
