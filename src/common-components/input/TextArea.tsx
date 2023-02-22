import React from 'react';
import { Input } from 'antd';
import { TextAreaProps } from 'antd/es/input';

import './TextArea.scss';

const TextArea = (props: TextAreaProps) => {
  const { style, className, ...passProps } = props;

  return (
    <Input.TextArea
      {...passProps}
      style={{
        resize: 'none',
        ...style,
      }}
      className={'text-area ' + className}
    />
  );
};

export default TextArea;
