import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
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
