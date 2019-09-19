import { AnyAction } from 'redux';

export interface ScoreState {
  score: number;
}

export const initialState: ScoreState = {
  score: 0,
};

export const scoreReducer = (
  state = initialState,
  action: AnyAction,
): ScoreState => {
  switch (action.type) {
    case 'GOOD_ANSWER':
      return { score: ++state.score };
    default:
      return state;
  }
};
