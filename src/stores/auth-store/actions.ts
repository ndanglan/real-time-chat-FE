import { TAuthPayload } from '../../interfaces/auth-interfaces';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, AUTHENTICATE_FAILURE } from './actionTypes';
import { AuthenticateFailure, LoginRequest, LoginSuccess, SignUpRequest, SignUpSuccess } from './types';

export const signUpRequest = (payload: TAuthPayload): SignUpRequest => ({
  type: SIGNUP_REQUEST,
  payload,
});

export const signUpSuccess = (payload: any): SignUpSuccess => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const loginRequest = (payload: TAuthPayload): LoginRequest => {
  return {
    type: LOGIN_REQUEST,
    payload,
  }
};

export const loginSuccess = (payload: any): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const authenticateFailure = (payload: any): AuthenticateFailure => ({
  type: AUTHENTICATE_FAILURE,
  payload,
});
