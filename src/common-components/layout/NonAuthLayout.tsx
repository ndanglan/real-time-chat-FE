import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import './NonAuthLayout.scss';

interface IMainLayoutProps extends PropsWithChildren {
  className?: string;
}

const NonAuthLayout = (props: IMainLayoutProps) => {
  const { className } = props;
  return (
    <>
      <Layout className={'non-auth-layout ' + className}>
        {props.children}
        <Outlet />
      </Layout>
    </>
  );
};

export default NonAuthLayout;
