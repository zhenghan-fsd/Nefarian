import { call, put } from 'redux-saga/effects';
import {
  userSignupSuccess,
  userSignupFailure,
  userLoginSuccess,
  userLoginFailure,
  userLogoutSuccess,
  userConfirmEmailSuccess,
  userConfirmEmailFailure
} from '../actionCreators/userActionCreator';
import userApi from '../apis/userApi';
import history from '../history';

export function* userSignupSaga(action) {
  try {
    yield call(userApi.signup, action.user);
    yield put(userSignupSuccess());
    history.push('/login');
  } catch (err) {
    yield put(userSignupFailure(err.response.data.errors));
  }
}

export function* userLoginSaga(action) {
  try {
    const user = yield call(userApi.login, action.user);
    localStorage.nefarian = user.token;
    yield put(userLoginSuccess(user));
    history.push('/dashboard');
  } catch (err) {
    yield put(userLoginFailure(err.response.data.errors));
  }
}

export function* userLogoutSaga() {
  localStorage.removeItem('nefarian');
  yield put(userLogoutSuccess());
  history.push('/login');
}

export function* userConfirmEmailSaga(action) {
  try {
    const user = yield call(userApi.confirm, action.token);
    localStorage.nefarian = user.token;
    yield put(userLoginSuccess(user));
  } catch (err) {
    yield put(userConfirmEmailFailure(err.response.data.errors));
  }
}
