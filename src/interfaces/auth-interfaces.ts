import { ELoginType } from '@variables/auth-variables';

export type TAuthToken = {
  accessToken: string;
  refreshToken?: string;
};

export type TAuthPayload = {
  email?: string;
  password?: string;
};

export type TLoginPayload = TAuthPayload & {
  type?: ELoginType;
};
