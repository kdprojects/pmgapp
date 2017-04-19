import { createSelector } from 'reselect';

/**
 * Direct selector to the loanApplication state domain
 */
const selectLoanApplicationDomain = () => (state) => state.get('loanApplication');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoanApplication
 */

const makeSelectLoanApplication = () => createSelector(
  selectLoanApplicationDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLoanApplication;
export {
  selectLoanApplicationDomain,
};
