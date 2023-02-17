import React from 'react'
import { Form, Divider, Typography } from 'antd'
import Link from 'antd/es/typography/Link';

import { EAccountMode } from '@variables/auth-variables'
import { AccountFormExtensions } from '@variables/account-variables'
import Image from '@common-components/image';
import Input from '@common-components/input/Input';
import Button from '@common-components/button';
import SocialLoginSection from './SocialLoginSection';



interface IAccountFormProps {
  mode: EAccountMode;
  onChangeAccountMode?: (mode: EAccountMode) => void
}

const AccountForm = (props: IAccountFormProps) => {
  const { mode, onChangeAccountMode } = props;

  const isSignUpMode = mode === EAccountMode.SIGN_UP;

  const renderChangeModeSection = () => {
    return isSignUpMode ? <Typography>Bạn đã có tài khoản ?<Link onClick={() => onChangeAccountMode?.(EAccountMode.LOGIN)}> Đăng ký tại đây </Link></Typography> : (<Typography>Bạn chưa có tài khoản ?<Link onClick={() => onChangeAccountMode?.(EAccountMode.SIGN_UP)}> Đăng ký tại đây </Link></Typography>)
  }

  return (
    <div className='account-wrapper'>
      {isSignUpMode && (
        <SocialLoginSection isSignUpMode={isSignUpMode} />
      )}
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        className='account-form'
      >
        {AccountFormExtensions[mode].formItems.map(item => {
          return <Form.Item
            key={item.name}
            name={item.name}
            rules={item.rules}
            colon={false}
            className='account-form-item'
          >
            <Input placeholder={item.label} type={item.type} />
          </Form.Item>
        })}

        {isSignUpMode && (
          <div className='text-center mb-8'>
            <Typography className='font-size-12'>Bằng cách đăng ký, bạn đồng ý với <Link className='font-size-12'>Điều khoản, Chính sách quyền riêng tư</Link> và <Link className='font-size-12'>Chính sách cookie</Link> của chúng tôi.
            </Typography>
          </div>
        )}

        <Button className='account-form-button' type="primary" htmlType="submit">
          {AccountFormExtensions[mode].buttonName}
        </Button>
      </Form>
      {!isSignUpMode && (
        <SocialLoginSection />
      )}
      <div className='account-form-button-container'>
        {renderChangeModeSection()}
      </div>
    </div>
  )
}

export default AccountForm