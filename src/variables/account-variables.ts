import { EAccountMode } from './auth-variables';

export const AccountFormExtensions = {
  [EAccountMode.LOGIN]: {
    buttonName: 'Đăng Nhập',
    formItems: [
      { label: 'Email người dùng', name: 'email', rules: [{ required: true, message: 'Vui lòng nhập email!' }] },
      {
        label: 'Mật khẩu',
        name: 'password',
        type: 'password',
        rules: [{ required: true, message: 'Vui lòng nhập mật khẩu!' }],
      },
    ],
  },
  [EAccountMode.SIGN_UP]: {
    buttonName: 'Đăng kí tài khoản',
    formItems: [
      { label: 'Email người dùng', name: 'email', rules: [{ required: true, message: 'Vui lòng nhập email!' }] },
      {
        label: 'Mật khẩu',
        name: 'password',
        type: 'password',
        rules: [{ required: true, message: 'Vui lòng nhập mật khẩu!' }],
      },
      {
        label: 'Xác nhận mật khẩu',
        name: 'confirmPassword',
        rules: [{ required: true, message: 'Vui lòng xác nhận lại mật khẩu!' }],
        type: 'password',
      },
    ],
  },
};
