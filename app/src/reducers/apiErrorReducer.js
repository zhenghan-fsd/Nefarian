import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE
} from '../actionTypes';

export default function apiError(state = {}, action = {}) {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { ...state, signup: {} };
    case USER_SIGNUP_FAILURE:
      return { ...state, signup: action.errors };
    case USER_LOGIN_REQUEST:
      return { ...state, login: {} };
    case USER_LOGIN_FAILURE:
      return { ...state, login: action.errors };
    default:
      return state;
  }
}
