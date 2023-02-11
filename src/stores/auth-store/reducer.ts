import { AUTHENTICATE_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actionTypes';

import { AuthActions, AuthState } from './types';

const initialState: AuthState = {
  pending: false,
  user: null,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
const reducers = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload.user,
        error: null,
      };
    case LOGIN_REQUEST:
      console.log(action)
      return {
        ...state,
        pending: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload.user,
        error: null,
      };
    case AUTHENTICATE_FAILURE:
      return {
        ...state,
        pending: false,
        user: null,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
