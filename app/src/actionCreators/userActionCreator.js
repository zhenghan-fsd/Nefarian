import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_CONFIRM_EMAIL_REQUEST,
  USER_CONFIRM_EMAIL_SUCCESS,
  USER_CONFIRM_EMAIL_FAILURE
} from '../actionTypes';

export const userSignupRequest = user => ({ type: USER_SIGNUP_REQUEST, user });
export const userSignupSuccess = () => ({ type: USER_SIGNUP_SUCCESS });
export const userSignupFailure = errors => ({
  type: USER_SIGNUP_FAILURE,
  errors
});

export const userLoginRequest = user => ({ type: USER_LOGIN_REQUEST, user });
export const userLoginSuccess = user => ({ type: USER_LOGIN_SUCCESS, user });
export const userLoginFailure = errors => ({
  type: USER_LOGIN_FAILURE,
  errors
});

export const userLogoutRequest = () => ({ type: USER_LOGOUT_REQUEST });
export const userLogoutSuccess = () => ({ type: USER_LOGOUT_SUCCESS });

export const userConfirmEmailRequest = token => ({
  type: USER_CONFIRM_EMAIL_REQUEST,
  token
});
export const userConfirmEmailSuccess = () => ({
  type: USER_CONFIRM_EMAIL_SUCCESS
});
export const userConfirmEmailFailure = errors => ({
  type: USER_CONFIRM_EMAIL_FAILURE,
  errors
});
