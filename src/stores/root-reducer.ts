import { combineReducers } from 'redux';
import testReducer from './test-store/reducer';
import authReducer from './auth-store/reducer';

const rootReducer = combineReducers({
  test: testReducer,
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
