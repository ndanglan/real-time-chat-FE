import { Dispatch } from 'redux';
import { useNavigate } from 'react-router-dom';
import { Card, Form, notification } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './AccountView.scss';

import { loginRequest, signUpRequest } from '@stores/actions/auth-actions';
import { EAccountMode, ELoginType } from '@variables/auth-variables';
import { AuthActions } from '@stores/actions/auth-actions/types';
import AccountForm from './components/AccountForm';
import { NonAuthLayout } from '@common-components/layout';
import Image from '@common-components/image';
import logoPng from '@assets/images/logo.png';
import { TAuthPayload } from '@interfaces/auth-interfaces';
import { handleAccessAuthPages, handleAuthResponseError } from '@utils/auth-utils';

interface Props {}

const AccountView = (props: Props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch<Dispatch<AuthActions>>();
  const navigate = useNavigate();
  const [accountMode, setAccountMode] = useState<EAccountMode>(EAccountMode.LOGIN);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChangeAccountMode = (mode: EAccountMode) => {
    form.resetFields();
    setAccountMode(mode);
  };

  const handleSubmitAccountResponse = (response: any) => {
    if (response.code) {
      const responseMessage = handleAuthResponseError(response);
      setErrorMessage(responseMessage);
      return;
    }

    if (accountMode === EAccountMode.LOGIN) {
      handleAccessAuthPages(
        {
          tokens: {
            accessToken: response.accessToken,
            refreshToken: response.refreshToken,
          },
          user: response.userProfile,
        },
        dispatch,
        navigate,
      );
      return;
    }

    notification.success({
      message: 'Đăng kí tài khoản thành công',
    });
    setAccountMode(EAccountMode.LOGIN);
    form.resetFields();
  };

  const onSubmitAccount = (values: TAuthPayload) => {
    if (accountMode === EAccountMode.LOGIN) {
      dispatch(loginRequest({ email: values.email, password: values.password }, handleSubmitAccountResponse));
      return;
    }

    dispatch(signUpRequest({ email: values.email, password: values.password }, handleSubmitAccountResponse));
  };

  const onLoginBySocialNW = (type: ELoginType) => {
    dispatch(loginRequest({ type }, (response) => console.log({ response })));
  };

  return (
    <NonAuthLayout className="account-view">
      <Card className="account-view_container">
        <Image width={200} src={logoPng} />
        <AccountForm
          onSubmitAccount={onSubmitAccount}
          form={form}
          mode={accountMode}
          onChangeAccountMode={onChangeAccountMode}
          onLoginBySocialNW={onLoginBySocialNW}
          errorMessage={errorMessage}
        />
      </Card>
    </NonAuthLayout>
  );
};

export default AccountView;
