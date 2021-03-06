import {
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS
} from '../actionTypes';

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_SIGNUP_SUCCESS:
      return {};
    case USER_LOGIN_SUCCESS:
      return action.user;
    case USER_LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
}
