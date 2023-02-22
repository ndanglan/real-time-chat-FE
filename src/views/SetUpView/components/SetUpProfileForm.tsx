import { Form, FormInstance, Radio } from 'antd';
import React from 'react';

import { EUserGender } from '@variables/user-variables';
import Input from '@common-components/input';
import { UploadImages } from '@common-components/upload-images';
import TextArea from '@common-components/input/TextArea';

interface ISetUpProfileFormProps {
  form: FormInstance<any>;
  onFinish: (values: any) => void;
}

const SetUpProfileForm = (props: ISetUpProfileFormProps) => {
  const { form, onFinish } = props;
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 6 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      scrollToFirstError
      onFinish={onFinish}
    >
      <Form.Item>
        <UploadImages className="d-flex align-center justify-center" label="Ảnh đại diện" />
      </Form.Item>
      <Form.Item label="Tên">
        <Input />
      </Form.Item>
      <Form.Item label="Email">
        <Input />
      </Form.Item>
      <Form.Item label="Số điện thoại">
        <Input />
      </Form.Item>
      <Form.Item label="Giới tính">
        <Radio.Group>
          <Radio value={EUserGender.FEMALE}> Nam </Radio>
          <Radio value={EUserGender.MALE}> Nữ </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tiểu sử">
        <TextArea rows={4} showCount maxLength={250} />
      </Form.Item>
    </Form>
  );
};

export default SetUpProfileForm;
