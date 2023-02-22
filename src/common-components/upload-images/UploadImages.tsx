import { UserOutlined } from '@ant-design/icons';
import { Avatar, Upload, message } from 'antd';
import { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/es/upload';
import React, { useState } from 'react';

import { getBase64 } from '@utils/common-utils';
import { Text } from '@common-components/typography';
import Button from '@common-components/button';

import './UploadImages.scss';

interface IUploadImagesProps {
  shape?: 'circle' | 'square';
  imageSize?: number;
  className?: string;
  label?: string;
}

const UploadImages = (props: IUploadImagesProps) => {
  const { shape = 'square', imageSize = 100, className, label } = props;
  const [imageUrl, setImageUrl] = useState<string>();

  const shapeListType = shape === 'circle' ? 'picture-circle' : 'picture-card';

  const beforeUpload = (file: RcFile) => {
    console.log({ file });
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange: UploadProps['onChange'] = async (info: UploadChangeParam<UploadFile>) => {
    if (!info.file.url) {
      info.file.url = await getBase64(info.file.originFileObj as RcFile);
    }

    setImageUrl(info.file.url);
  };

  const onRemoveAvatar = () => {
    setImageUrl('');
  };

  return (
    <>
      <Upload
        name="avatar"
        listType={shapeListType}
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        className={'upload-images_container d-flex align-center justify-center' + className}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" className={`upload-images_img ${shape}`} />
        ) : (
          <Avatar shape={shape} size={imageSize} className="upload-images_img__default" icon={<UserOutlined />} />
        )}
      </Upload>
      <div className="d-flex align-center justify-center mt-2">
        {label && !imageUrl && <Text>{label}</Text>}
        {imageUrl && (
          <Button danger type="text" onClick={onRemoveAvatar}>
            Xóa ảnh đại diện
          </Button>
        )}
      </div>
    </>
  );
};

export default UploadImages;
