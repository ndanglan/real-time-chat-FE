import React from 'react'
import { Divider, Typography } from 'antd'

import Button from '@common-components/button'
import Image from '@common-components/image'

import faceBookPng from '@assets/images/facebookIcon.png';
import googlePng from '@assets/images/googleicon.jpg';

interface ISocialLoginSectionProps {
  isSignUpMode?: boolean
}

const SocialLoginSection = (props: ISocialLoginSectionProps) => {
  const { isSignUpMode } = props
  return (
    <>
      {!isSignUpMode && (
        <Divider className='account-form-divider' plain>HOẶC</Divider>
      )}
      <div className='account-form-button-container'>
        <Button type='text' className='account-form-button'>
          <Image width={20} src={faceBookPng} rootClassName='mr-8' />
          <Typography>
            Đăng nhập bằng Facebook
          </Typography>
        </Button>
      </div>
      <div className='account-form-button-container'>
        <Button type='text' className='account-form-button'>
          <Image width={20} src={googlePng} rootClassName='mr-8' />
          <Typography>
            Đăng nhập bằng Google
          </Typography>
        </Button>
      </div>
      {isSignUpMode && (
        <Divider className='account-form-divider' plain>HOẶC</Divider>
      )}
    </>
  )
}

export default SocialLoginSection