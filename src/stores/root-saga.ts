import { all } from 'redux-saga/effects';
import authSaga from './auth-store/saga';

export default function* rootSaga() {
  yield all([authSaga()]);
}
