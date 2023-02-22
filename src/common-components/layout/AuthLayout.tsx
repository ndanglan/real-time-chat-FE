import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import { EAuthToken } from '@variables/auth-variables';
import { ERoutesPath } from '@variables';
import SideBar from './side-bar';
import { Text } from '../typography';

import './AuthLayout.scss';

const { Sider, Footer, Content } = Layout;

const AuthLayout = () => {
  const isAuthenticated = localStorage.getItem(EAuthToken.ACCESS_TOKEN);

  if (!isAuthenticated) {
    return <Navigate to={ERoutesPath.ACCOUNT_VIEW} replace={true} />;
  }

  return (
    <Layout className="auth-layout h-full">
      <Sider width={250} className="sider">
        <SideBar />
      </Sider>
      <Layout className="auth-layout_content d-flex align-center justify-center">
        <Content>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <Text>Ant Design ©2023 Created by Ant UED</Text>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AuthLayout;
