import { LoadingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Image, notification } from 'antd';
import React, { useState } from 'react';

import Button from '@common-components/button';
import { Text } from '@common-components/typography';

import './UploadAvatars.scss';

const IMAGE_EXTENSIONS = '.png, .jpg, .jpeg';
const MAX_SIZE_AVATARS = 2;

interface IUploadAvatarsProps {
  onChangeAvatar?: (file: File) => void;
  className?: string;
  label?: string;
  imageSize?: number;
  shape?: 'circle' | 'square';
  bordered?: boolean;
}

const UploadAvatars = (props: IUploadAvatarsProps) => {
  const { onChangeAvatar, className, label, imageSize = 64, shape = 'circle', bordered = true } = props;
  const [selectedImage, setSelectedImage] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const borderClassName = bordered && !selectedImage ? 'upload-avatar_wrapper__bordered' : '';

  const handleChangeFile = (e: any) => {
    console.log(e.target.files);
    if (e.target.files[0]?.size > MAX_SIZE_AVATARS * 1024 * 1024) {
      notification.error({
        message: `Unable to upload picture larger than ${MAX_SIZE_AVATARS}mb`,
      });
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      onChangeAvatar && onChangeAvatar(e.target.files[0]);
    }
  };

  const onRemoveAvatar = () => {
    setSelectedImage(null);
  };

  return (
    <div className="upload-avatar_container flex-column align-center justify-center">
      <label htmlFor="upload-avatar">
        <div className={`upload-avatar_wrapper ${shape} ${borderClassName} ${className}`}>
          <div>
            {selectedImage ? (
              <Image
                src={typeof selectedImage === 'string' ? selectedImage : URL.createObjectURL(selectedImage)}
                className={`upload-avatar_image ${shape} `}
                preview={false}
                style={{
                  width: imageSize,
                  height: imageSize,
                }}
              />
            ) : (
              <Avatar shape={shape} size={imageSize} icon={isLoading ? <LoadingOutlined /> : <UserOutlined />} />
            )}
          </div>
        </div>
      </label>

      <div className="d-flex align-center justify-center mt-8">
        {label && !selectedImage && <Text>{label}</Text>}
        {selectedImage && (
          <Button danger type="text" onClick={onRemoveAvatar}>
            Xóa ảnh đại diện
          </Button>
        )}
      </div>
      <input
        type="file"
        id="upload-avatar"
        onChange={handleChangeFile}
        accept={IMAGE_EXTENSIONS}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default UploadAvatars;
