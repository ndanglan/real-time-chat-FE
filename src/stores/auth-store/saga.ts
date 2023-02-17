import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { signUpSuccess, loginSuccess, authenticateFailure } from './actions';
import { SIGNUP_REQUEST, LOGIN_REQUEST } from './actionTypes';
import { AuthActions, LoginRequest, SignUpRequest } from './types';
import { TAuthPayload } from '@interfaces/auth-interfaces';
import { loginWithEmailPassWord, signUpUser, loginWithFaceBookGoogle } from '@services/auth-services';
import { ELoginType } from '@variables/auth-variables';

function* loginSaga(action: LoginRequest) {
  try {
    const { email, password, type } = action.payload;
    let response: AxiosResponse<any>;
    switch (type) {
      case ELoginType.GOOGLE:
      case ELoginType.FACEBOOK:
        response = yield call(loginWithFaceBookGoogle, type);
        break;
      default:
        response = yield call(loginWithEmailPassWord, { email, password });
        break;
    }
    // yield put(loginSuccess({ user }));
    action.callbacks?.(response);
  } catch (error) {
    yield put(authenticateFailure({ error }));
  }
}

function* signupSaga(action: SignUpRequest) {
  try {
    const { email, password, confirmPassword } = action.payload;
    const user: AxiosResponse<any> = yield call(signUpUser, { email, password, confirmPassword });
    console.log('signupSaga', user);
    yield put(signUpSuccess());
    action.callbacks?.(user);
  } catch (error) {
    yield put(authenticateFailure({ error }));
  }
}

function* watchAuthSaga() {
  yield all([takeLatest(LOGIN_REQUEST, loginSaga), takeLatest(SIGNUP_REQUEST, signupSaga)]);
}

export default watchAuthSaga;
