import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { signUpSuccess, loginSuccess, authenticateFailure } from './actions';
import { SIGNUP_REQUEST, LOGIN_REQUEST, LOGIN_SUCCESS, AUTHENTICATE_FAILURE } from './actionTypes';
import { AuthActions } from './types';
import { TAuthPayload } from '../../interfaces/auth-interfaces';
import { loginWithEmailPassWord, signUpUser } from '../../services/auth-services';

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* loginSaga(action: { payload: TAuthPayload; type: typeof LOGIN_REQUEST }) {
  try {
    const { email, password } = action.payload;
    const user: AxiosResponse<any> = yield call(loginWithEmailPassWord, { email, password });
    console.log('loginSaga', user);
    yield put(loginSuccess({ user }));
  } catch (error) {
    yield put(authenticateFailure({ error }));
  }
}
// signUpRequest
// signUpSuccess
function* signupSaga(action: { payload: TAuthPayload; type: typeof SIGNUP_REQUEST }) {
  try {
    const { email, password } = action.payload;
    const user: AxiosResponse<any> = yield call(signUpUser, { email, password });
    console.log('signupSaga', user);
    yield put(signUpSuccess({ user }));
  } catch (error) {
    yield put(authenticateFailure({ error }));
  }
}

function* watchAuthSaga() {
  yield all([takeLatest(LOGIN_REQUEST, loginSaga),takeLatest(SIGNUP_REQUEST,signupSaga)]);
}

export default watchAuthSaga;
