/*
 *
 * LoanApplication reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  NEXT_STEP
} from './constants';

const initialState = fromJS({
  openDrawer: true,
  stepIndex: 0,
  finished: false
});

function loanApplicationReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_STEP:
      return state.set({stepIndex: action.payload})
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default loanApplicationReducer;
