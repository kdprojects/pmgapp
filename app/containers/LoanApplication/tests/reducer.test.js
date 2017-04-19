
import { fromJS } from 'immutable';
import loanApplicationReducer from '../reducer';

describe('loanApplicationReducer', () => {
  it('returns the initial state', () => {
    expect(loanApplicationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
