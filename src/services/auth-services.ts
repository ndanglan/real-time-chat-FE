import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  User,
} from 'firebase/auth';

import { firebaseAuth } from '@config/firebase-config';
import { TAuthPayload } from '@interfaces/auth-interfaces';
import { FirebaseError } from 'firebase/app';
import apiClient from '.';
import { ELoginType } from '@variables/auth-variables';

export const doPostUserIdToken = async (user: User, url = '/api/firebase/auth/login') => {
  const idToken = await user.getIdToken();
  const response = await apiClient.post(url, { idToken });
  if (response.status === 200) {
    return response.data;
  }

  return null;
};

export const loginWithEmailPassWord = async (payload: TAuthPayload) => {
  const { email, password } = payload;
  try {
    if (!!email && !!password) {
      const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
      const response = await doPostUserIdToken(result.user);
      return response;
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.log(error.code);
    }
  }
};

export const loginWithFaceBookGoogle = async (type: ELoginType) => {
  try {
    const provider = type === ELoginType.FACEBOOK ? new FacebookAuthProvider() : new GoogleAuthProvider();
    const result = await signInWithPopup(firebaseAuth, provider);
    const response = await doPostUserIdToken(result.user);
    return response;
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.log(error.code);
    }
  }
};

export const signUpUser = async (payload: TAuthPayload) => {
  const endpoint = '/api/firebase/auth/signup';
  const { email, password } = payload;
  try {
    if (!!email && !!password) {
      const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      const res = await doPostUserIdToken(result.user, endpoint);
      return res;
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.log(error.code);
    }
  }
};
