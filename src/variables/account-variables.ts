import { FormInstance } from 'antd';
import { Rule, RuleObject } from 'antd/es/form';

import { EAccountMode } from './auth-variables';

export const AccountFormExtensions = {
  [EAccountMode.LOGIN]: {
    buttonName: 'Đăng Nhập',
    formItems: [
      {
        label: 'Email người dùng',
        name: 'email',
        rules: [
          { required: true, message: 'Vui lòng nhập email!' },
          {
            type: 'email',
            message: 'Email không hợp lệ',
          },
        ] as Rule[],
      },
      {
        label: 'Mật khẩu',
        name: 'password',
        type: 'password',
        rules: [
          { required: true, message: 'Vui lòng nhập mật khẩu!' },
          { min: 8, message: 'Vui lòng nhập mật khẩu có nhiều hơn 8 chữ số ' },
        ] as Rule[],
      },
    ],
  },
  [EAccountMode.SIGN_UP]: {
    buttonName: 'Đăng kí tài khoản',
    formItems: [
      {
        label: 'Email người dùng',
        name: 'email',
        rules: [
          { required: true, message: 'Vui lòng nhập email!' },
          {
            type: 'email',
            message: 'Email không hợp lệ',
          },
        ] as Rule[],
      },
      {
        label: 'Mật khẩu',
        name: 'password',
        type: 'password',
        rules: [
          { required: true, message: 'Vui lòng nhập mật khẩu!' },
          { min: 8, message: 'Vui lòng nhập mật khẩu có nhiều hơn 8 chữ số ' },
        ] as Rule[],
      },
      {
        label: 'Xác nhận mật khẩu',
        name: 'confirmPassword',
        rules: [
          { required: true, message: 'Vui lòng xác nhận lại mật khẩu!' },
          { min: 8, message: 'Vui lòng nhập mật khẩu có nhiều hơn 8 chữ số ' },
          ({ getFieldValue }: FormInstance<any>) => ({
            validator(_: RuleObject, value: any) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Xác nhận mật khẩu không trùng khớp'));
            },
          }),
        ] as Rule[],
        type: 'password',
      },
    ],
  },
};
