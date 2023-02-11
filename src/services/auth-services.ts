import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';

import { firebaseAuth } from '../config/firebase-config';
import { TAuthPayload } from '../interfaces/auth-interfaces';
import { FirebaseError } from 'firebase/app';
import apiClient from '.';
import { ELoginType } from '../variables/auth-variables';

export const loginWithEmailPassWord = async (payload: TAuthPayload) => {
  const { email, password } = payload;
  try {
    const response = await signInWithEmailAndPassword(firebaseAuth, email, password);
    console.log({ loginWithEmailPassWord: response });
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.log(error.code);
    }
  }
};

export const loginWithFaceBookGoogle = async (type: ELoginType) => {
  try {
    let credential;
    switch (type) {
      case ELoginType.GOOGLE:
        {
          const provider = new GoogleAuthProvider();
          const result = await signInWithPopup(firebaseAuth, provider);
          credential = await GoogleAuthProvider.credentialFromResult(result);
        }
        break;
      case ELoginType.FACEBOOK:
        {
          const provider = new FacebookAuthProvider();
          const result = await signInWithPopup(firebaseAuth, provider);
          console.log({result})
          credential = await FacebookAuthProvider.credentialFromResult(result);
          console.log({credential})
        }
        break;
      default:
        break;
    }

    console.log({ loginWithFaceBookGoogle: credential });
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.log(error.code);
    }
  }
};

export const signUpUser = async (payload: TAuthPayload) => {
  const { email, password } = payload;
  try {
    const response = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    const idToken = await response.user.getIdToken();
    const test = await apiClient.post('/api/firebase/auth/signup', { idToken });
    console.log({ test: test });
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.log(error.code);
    }
  }
};
