import {all  } from 'redux-saga/effects';
import todoSaga from "./test-store/saga";
import authSaga from './auth-store/saga';

export default function* rootSaga() {
  yield all([todoSaga(),authSaga()]);
}
