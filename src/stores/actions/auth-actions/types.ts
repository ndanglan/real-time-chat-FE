import { TAuthPayload, TLoginPayload } from '@interfaces/auth-interfaces';
import { EAuthActions } from './constants';
import { TUser } from '@interfaces/user-interfaces';

export interface AuthState {
  user?: TUser;
}

export interface SignUpRequest {
  type: typeof EAuthActions.SIGNUP_REQUEST;
  payload: TLoginPayload;
  callbacks?: (response: any) => void;
}

export interface LoginRequest extends Omit<SignUpRequest, 'type'> {
  type: typeof EAuthActions.LOGIN_REQUEST;
}

export type SignUpSuccess = {
  type: typeof EAuthActions.SIGNUP_SUCCESS;
};

export interface LoginSuccess {
  type: typeof EAuthActions.LOGIN_SUCCESS;
  payload: any;
}

export type AuthenticateFailure = {
  type: typeof EAuthActions.AUTHENTICATE_FAILURE;
  payload: any;
};

export type AuthActions = SignUpRequest | SignUpSuccess | AuthenticateFailure | LoginRequest | LoginSuccess;
