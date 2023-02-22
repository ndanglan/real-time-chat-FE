import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { loginWithEmailPassWord, signUpUser, loginWithFaceBookGoogle } from '@services/auth-services';
import { ELoginType } from '@variables/auth-variables';
import { LoginRequest, SignUpRequest } from '@stores/actions/auth-actions/types';
import { authenticateFailure, loginSuccess, signUpSuccess } from '@stores/actions/auth-actions';
import { EAuthActions } from '@stores/actions/auth-actions/constants';

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
    yield put(loginSuccess(response));
    action.callbacks?.(response);
  } catch (error) {
    yield put(authenticateFailure({ error }));
    action.callbacks?.(error);
  }
}

function* signupSaga(action: SignUpRequest) {
  try {
    const { email, password, confirmPassword } = action.payload;
    const response: AxiosResponse<any> = yield call(signUpUser, { email, password, confirmPassword });
    yield put(signUpSuccess());
    action.callbacks?.(response);
  } catch (error) {
    yield put(authenticateFailure({ error }));
  }
}

function* watchAuthSaga() {
  yield all([takeLatest(EAuthActions.LOGIN_REQUEST, loginSaga), takeLatest(EAuthActions.SIGNUP_REQUEST, signupSaga)]);
}

export default watchAuthSaga;
