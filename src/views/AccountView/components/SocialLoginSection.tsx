import React from 'react';
import { Divider, Typography } from 'antd';

import Button from '@common-components/button';
import Image from '@common-components/image';

import faceBookPng from '@assets/images/facebookIcon.png';
import googlePng from '@assets/images/googleicon.jpg';
import { ELoginType } from '@variables';

interface ISocialLoginSectionProps {
  isSignUpMode?: boolean;
  onLoginBySocialNW: (type: ELoginType) => void;
}

const SocialLoginSection = (props: ISocialLoginSectionProps) => {
  const { isSignUpMode, onLoginBySocialNW } = props;
  return (
    <div className={`flex-column${isSignUpMode ? ' ' : '-reverse'} justify-center align-center w-full`}>
      <div className="account-form_button__social">
        <Button
          type="text"
          className="account-form_button"
          onClick={() => {
            onLoginBySocialNW(ELoginType.FACEBOOK);
          }}
        >
          <Image width={20} src={faceBookPng} rootClassName="mr-8" />
          <Typography>Đăng nhập bằng Facebook</Typography>
        </Button>
      </div>
      <div className="account-form_button__social">
        <Button
          type="text"
          className="account-form_button"
          onClick={() => {
            onLoginBySocialNW(ELoginType.GOOGLE);
          }}
        >
          <Image width={20} src={googlePng} rootClassName="mr-8" />
          <Typography>Đăng nhập bằng Google</Typography>
        </Button>
      </div>
      <Divider className="account-form_divider" plain>
        HOẶC
      </Divider>
    </div>
  );
};

export default SocialLoginSection;
