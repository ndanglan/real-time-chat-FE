import React from 'react'
import { Image as AntdImage, ImageProps } from 'antd'

import "./Image.scss"

const Image = (props: ImageProps) => {
  return (
    <AntdImage {...props} preview={false} />
  )
}

export default Image