import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import React from 'react';

const { Text: AntText } = Typography;

const Text = (props: TextProps) => {
  return <AntText {...props} />;
};

export default Text;
