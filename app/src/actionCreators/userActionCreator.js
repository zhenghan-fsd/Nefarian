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
  USER_CONFIRM_EMAIL_FAILURE,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAILURE,
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_FAILURE,
  USER_VERIFY_RESET_PASSWORD_REQUEST,
  USER_VERIFY_RESET_PASSWORD_SUCCESS,
  USER_VERIFY_RESET_PASSWORD_FAILURE
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

export const userForgotPasswordRequest = email => ({
  type: USER_FORGOT_PASSWORD_REQUEST,
  email
});
export const userForgotPasswordSuccess = () => ({
  type: USER_FORGOT_PASSWORD_SUCCESS
});
export const userForgotPasswordFailure = errors => ({
  type: USER_FORGOT_PASSWORD_FAILURE,
  errors
});

export const userResetPasswordRequest = data => ({
  type: USER_RESET_PASSWORD_REQUEST,
  data
});
export const userResetPasswordSuccess = () => ({
  type: USER_RESET_PASSWORD_SUCCESS
});
export const userResetPasswordFailure = errors => ({
  type: USER_RESET_PASSWORD_FAILURE,
  errors
});

export const userVerifyResetPasswordRequest = token => ({
  type: USER_VERIFY_RESET_PASSWORD_REQUEST,
  token
});
export const userVerifyResetPasswordSuccess = () => ({
  type: USER_VERIFY_RESET_PASSWORD_SUCCESS
});
export const userVerifyResetPasswordFailure = errors => ({
  type: USER_VERIFY_RESET_PASSWORD_FAILURE,
  errors
});
