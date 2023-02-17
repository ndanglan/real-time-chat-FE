import React, { PropsWithChildren } from 'react'

import './NonAuthLayout.scss';
import { Outlet } from 'react-router-dom';

interface IMainLayoutProps extends PropsWithChildren {
  className?: string;
}

const NonAuthLayout = (props: IMainLayoutProps) => {
  const { className } = props;
  return (
    <>
      <main className={'non-auth-layout ' + className}>
        {props.children}
        <Outlet />
      </main>
    </>
  )
}

export default NonAuthLayout