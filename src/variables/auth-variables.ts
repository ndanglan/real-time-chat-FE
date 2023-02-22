export enum EAuthToken {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
}

export enum ELoginType {
  GOOGLE = 'GOOGLE',
  FACEBOOK = 'FACEBOOK',
  EMAIL_PASSWORD = 'EMAIL_PASSWORD',
}

export enum EAccountMode {
  LOGIN = 'LOGIN',
  SIGN_UP = 'SIGN_UP',
}

export enum EAuthError {
  USER_NOT_FOUND = 'auth/user-not-found',
  WRONG_PASSWORD = 'auth/wrong-password',
}
