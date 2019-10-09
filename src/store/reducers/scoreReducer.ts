import { AnyAction } from 'redux';

export interface ScoreState {
  goodAnswers: number;
  wrongAnswers: number;
}

export const initialState: ScoreState = {
  goodAnswers: 0,
  wrongAnswers: 0,
};

export const scoreReducer = (
  state = initialState,
  action: AnyAction,
): ScoreState => {
  switch (action.type) {
    case 'GOOD_ANSWER':
      return { ...state, goodAnswers: ++state.goodAnswers };
    case 'WRONG_ANSWER':
      return { ...state, wrongAnswers: ++state.wrongAnswers };
    case 'RESET_SCORE':
      return { goodAnswers: 0, wrongAnswers: 0 };
    default:
      return state;
  }
};
