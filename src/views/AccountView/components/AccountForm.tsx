import React from 'react';
import { Form, Typography, FormInstance } from 'antd';
import Link from 'antd/es/typography/Link';

import { EAccountMode, ELoginType } from '@variables/auth-variables';
import { AccountFormExtensions } from '@variables/account-variables';
import Input from '@common-components/input/Input';
import Button from '@common-components/button';
import SocialLoginSection from './SocialLoginSection';
import Text from '@common-components/typography/Text';

interface IAccountFormProps {
  mode: EAccountMode;
  form?: FormInstance<any>;
  errorMessage?: string;
  onChangeAccountMode?: (mode: EAccountMode) => void;
  onSubmitAccount: (values: any) => void;
  onLoginBySocialNW: (type: ELoginType) => void;
}

const AccountForm = (props: IAccountFormProps) => {
  const { mode, form, errorMessage, onSubmitAccount, onChangeAccountMode, onLoginBySocialNW } = props;

  const isSignUpMode = mode === EAccountMode.SIGN_UP;

  const renderChangeModeSection = () => {
    return isSignUpMode ? (
      <Typography>
        Bạn đã có tài khoản ?<Link onClick={() => onChangeAccountMode?.(EAccountMode.LOGIN)}> Đăng nhập tại đây </Link>
      </Typography>
    ) : (
      <Typography>
        Bạn chưa có tài khoản ?
        <Link onClick={() => onChangeAccountMode?.(EAccountMode.SIGN_UP)}> Đăng ký tại đây </Link>
      </Typography>
    );
  };

  return (
    <div className="account-view_wrapper">
      <div className={`flex-column${isSignUpMode ? '-reverse' : ' '} justify-center align-center w-full`}>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 6 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          className="account-form"
          scrollToFirstError
          onFinish={onSubmitAccount}
        >
          {AccountFormExtensions[mode].formItems.map((item) => {
            return (
              <Form.Item
                key={item.name}
                name={item.name}
                rules={item.rules}
                colon={false}
                className="account-form_item"
              >
                <Input placeholder={item.label} type={item.type} />
              </Form.Item>
            );
          })}

          {isSignUpMode && (
            <div className="text-center mb-8">
              <Typography className="font-size-12">
                Bằng cách đăng ký, bạn đồng ý với{' '}
                <Link className="font-size-12">Điều khoản, Chính sách quyền riêng tư</Link> và{' '}
                <Link className="font-size-12">Chính sách cookie</Link> của chúng tôi.
              </Typography>
            </div>
          )}
          <Form.Item shouldUpdate className="mb-none">
            {() => {
              return (
                <>
                  <Button
                    className="account-form_button"
                    type="primary"
                    htmlType="submit"
                    disabled={!!form?.getFieldsError().filter(({ errors }) => errors.length).length}
                  >
                    {AccountFormExtensions[mode].buttonName}
                  </Button>
                  {errorMessage && (
                    <div className="d-flex align-center justify-center mt-2">
                      <Text type="danger">{errorMessage}</Text>
                    </div>
                  )}
                </>
              );
            }}
          </Form.Item>
        </Form>
        <SocialLoginSection isSignUpMode={isSignUpMode} onLoginBySocialNW={onLoginBySocialNW} />
      </div>
      <div className="account-form_button__social">{renderChangeModeSection()}</div>
    </div>
  );
};

export default AccountForm;
