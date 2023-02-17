import React from 'react';
import { Input as AntInput, InputProps } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

import './Input.scss'

const Input = (props: InputProps) => {
  const { className, placeholder, type, ...passProps } = props;
  const InputClassName = `input ${className ?? ''}`

  if (type === 'password') {
    return <AntInput.Password {...passProps} type={type} className={InputClassName} placeholder='Mật khẩu' iconRender={(visible) => visible ? <EyeInvisibleOutlined /> : <EyeOutlined />} />
  }

  return (
    <AntInput {...passProps} className={InputClassName} placeholder={placeholder} type={type || 'text'} />
  )
}

export default Input