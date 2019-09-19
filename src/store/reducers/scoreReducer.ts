import { AnyAction } from 'redux';

export interface ScoreState {
  count: number;
}

export const initialState: ScoreState = {
  count: 0,
};

export const scoreReducer = (
  state = initialState,
  action: AnyAction,
): ScoreState => {
  switch (action.type) {
    case 'GOOD_ANSWER':
      return { count: ++state.count };
    case 'RESET_SCORE':
      return { count: 0 };
    default:
      return state;
  }
};
