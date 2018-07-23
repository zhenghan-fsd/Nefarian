import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_CONFIRM_EMAIL_REQUEST,
  USER_CONFIRM_EMAIL_FAILURE,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_FAILURE,
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_FAILURE,
  USER_VERIFY_RESET_PASSWORD_REQUEST,
  USER_VERIFY_RESET_PASSWORD_FAILURE
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
    case USER_CONFIRM_EMAIL_REQUEST:
      return { ...state, confirm: {} };
    case USER_CONFIRM_EMAIL_FAILURE:
      return { ...state, confirm: action.errors };
    case USER_FORGOT_PASSWORD_REQUEST:
      return { ...state, forgotPassword: {} };
    case USER_FORGOT_PASSWORD_FAILURE:
      return { ...state, forgotPassword: action.errors };
    case USER_RESET_PASSWORD_REQUEST:
      return { ...state, resetPassword: {} };
    case USER_RESET_PASSWORD_FAILURE:
      return { ...state, resetPassword: action.errors };
    case USER_VERIFY_RESET_PASSWORD_REQUEST:
      return { ...state, verifyResetPassword: {} };
    case USER_VERIFY_RESET_PASSWORD_FAILURE:
      return { ...state, verifyResetPassword: action.errors };
    default:
      return state;
  }
}
