import { AnyAction, Dispatch } from 'redux';
import { NavigateFunction } from 'react-router-dom';

import { EAuthError } from '@variables/auth-variables';
import { TAuthToken } from '@interfaces/auth-interfaces';
import { handleStorageToken } from './storage';
import { ERoutesPath } from '@variables';

export const handleAuthResponseError = (response: any) => {
  let message = 'Vui lòng nhập lại tài khoản';
  switch (response.code) {
    case EAuthError.USER_NOT_FOUND:
      message = 'Tài khoản không tồn tại';
      break;
    case EAuthError.WRONG_PASSWORD:
      message = 'Nhập sai mật khẩu';
      break;
    default:
      break;
  }

  return message;
};

export const handleAccessAuthPages = async (
  response: {
    tokens: TAuthToken;
    user: any;
  },
  dispatch: Dispatch<AnyAction>,
  navigate: NavigateFunction,
) => {
  // if (user)
  // check nếu user.IsCompleteInformation thì sang Home không thì sang setUP
  handleStorageToken(response.tokens);

  navigate(ERoutesPath.SET_UP);
};
