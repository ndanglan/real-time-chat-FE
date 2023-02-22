import { combineReducers } from 'redux';
import authReducer from './auth-reducers';

const rootReducer = combineReducers({
  authStore: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
