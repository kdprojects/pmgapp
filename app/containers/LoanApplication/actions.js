/*
 *
 * LoanApplication actions
 *
 */

import {
  DEFAULT_ACTION,
  NEXT_STEP,
  PREV_STEP,
  LOGIN
} from './constants';

export function login() {
  return {
    type: LOGIN
  }
}

export function nextStep(stepIndex) {
  return {
    type: NEXT_STEP,
    payload: stepIndex++
  }
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
