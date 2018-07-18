import { takeLatest } from 'redux-saga/effects';
import {
  USER_SIGNUP_REQUEST,
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_CONFIRM_EMAIL_REQUEST
} from '../actionTypes';
import {
  userSignupSaga,
  userLoginSaga,
  userLogoutSaga,
  userConfirmEmailSaga
} from './userSaga';

export default function* rootSaga() {
  yield takeLatest(USER_SIGNUP_REQUEST, userSignupSaga);
  yield takeLatest(USER_LOGIN_REQUEST, userLoginSaga);
  yield takeLatest(USER_LOGOUT_REQUEST, userLogoutSaga);
  yield takeLatest(USER_CONFIRM_EMAIL_REQUEST, userConfirmEmailSaga);
}
