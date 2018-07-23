import { takeLatest } from 'redux-saga/effects';
import {
  USER_SIGNUP_REQUEST,
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_CONFIRM_EMAIL_REQUEST,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_REQUEST,
  USER_VERIFY_RESET_PASSWORD_REQUEST
} from '../actionTypes';
import {
  userSignupSaga,
  userLoginSaga,
  userLogoutSaga,
  userConfirmEmailSaga,
  userForgotPasswordSaga,
  userResetPasswordSaga,
  userVerifyResetPasswordSaga
} from './userSaga';

export default function* rootSaga() {
  yield takeLatest(USER_SIGNUP_REQUEST, userSignupSaga);
  yield takeLatest(USER_LOGIN_REQUEST, userLoginSaga);
  yield takeLatest(USER_LOGOUT_REQUEST, userLogoutSaga);
  yield takeLatest(USER_CONFIRM_EMAIL_REQUEST, userConfirmEmailSaga);
  yield takeLatest(USER_FORGOT_PASSWORD_REQUEST, userForgotPasswordSaga);
  yield takeLatest(USER_RESET_PASSWORD_REQUEST, userResetPasswordSaga);
  yield takeLatest(
    USER_VERIFY_RESET_PASSWORD_REQUEST,
    userVerifyResetPasswordSaga
  );
}
