import {all,fork  } from 'redux-saga/effects';
import todoSaga from "./test-store/saga";

export default function* rootSaga() {
  yield all([fork(todoSaga)]);
}
