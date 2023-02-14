import { TAuthPayload, TLoginPayload } from '../../interfaces/auth-interfaces';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, AUTHENTICATE_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionTypes';

export interface AuthState {
  pending: boolean;
  user: any;
  error: string | null;
}

export interface SignUpRequest {
  type: typeof SIGNUP_REQUEST;
  payload: TLoginPayload;
  callbacks?: (response: any) => void;
}

export interface LoginRequest extends Omit<SignUpRequest, 'type'> {
  type: typeof LOGIN_REQUEST;
}

export type SignUpSuccess = {
  type: typeof SIGNUP_SUCCESS;
  payload: any;
};

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: any;
}

export type AuthenticateFailure = {
  type: typeof AUTHENTICATE_FAILURE;
  payload: any;
};

export type AuthActions = SignUpRequest | SignUpSuccess | AuthenticateFailure | LoginRequest | LoginSuccess;
