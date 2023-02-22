import { TAuthPayload, TLoginPayload } from '@interfaces/auth-interfaces';
import { AuthenticateFailure, LoginRequest, LoginSuccess, SignUpRequest, SignUpSuccess } from './types';
import { EAuthActions } from './constants';

export const signUpRequest = (payload: TAuthPayload, callbacks?: (response: any) => void): SignUpRequest => ({
  type: EAuthActions.SIGNUP_REQUEST,
  payload,
  callbacks,
});

export const signUpSuccess = (): SignUpSuccess => ({
  type: EAuthActions.SIGNUP_SUCCESS,
});

export const loginRequest = (payload: TLoginPayload, callbacks?: (response: any) => void): LoginRequest => {
  return {
    type: EAuthActions.LOGIN_REQUEST,
    payload,
    callbacks,
  };
};

export const loginSuccess = (payload: any): LoginSuccess => ({
  type: EAuthActions.LOGIN_SUCCESS,
  payload,
});

export const authenticateFailure = (payload: any): AuthenticateFailure => ({
  type: EAuthActions.AUTHENTICATE_FAILURE,
  payload,
});
