import React from 'react';
import { Button as AntButton, ButtonProps } from 'antd';

import './Button.scss';

const Button = (props: ButtonProps) => {
  const { children, className, ...passProps } = props;
  const ButtonClassName = `button ${className}`
  return (
    <AntButton className={ButtonClassName} {...passProps}>{children}</AntButton>
  )
}

export default Button