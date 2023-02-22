import { EAuthActions } from '../actions/auth-actions/constants';
import { AuthActions, AuthState } from '../actions/auth-actions/types';

const initialState: AuthState = {
  user: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
const reducers = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case EAuthActions.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
