import { Form, Layout } from 'antd';
import React, { useState } from 'react';

import { ESetupMode } from '@variables/setup-variables';
import { TOnClickMenuItem } from '@common-components/menu/types';
import Menu from '@common-components/menu';
import SetUpProfileForm from './components/SetUpProfileForm';

import './SetUpView.scss';

const { Content, Sider } = Layout;

interface Props {}

const SetUpView = (props: Props) => {
  const [form] = Form.useForm();
  const [selectedKey, setSelectedKey] = useState<string>(ESetupMode.SETTING_PROFILE);

  const items = [
    {
      key: ESetupMode.SETTING_PROFILE,
      label: 'Chỉnh sửa trang cá nhân',
    },
  ];

  const handleClickItem: TOnClickMenuItem = (e) => {
    setSelectedKey(e.key);
  };

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <Layout className="h-full setup-view_layout">
      <Sider width={250}>
        <Menu onClick={handleClickItem} mode="vertical" selectedKeys={selectedKey} items={items} />
      </Sider>
      <Content className="setup-view_content pt-24 pr-32 pl-32">
        <SetUpProfileForm form={form} onFinish={onFinish} />
      </Content>
    </Layout>
  );
};

export default SetUpView;
