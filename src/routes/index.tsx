import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthLayout, NonAuthLayout } from '@common-components/layout';
import { ERoutesPath } from '@variables';

const Home = lazy(() => import('@views/Home'));
const AccountView = lazy(() => import('@views/AccountView'));
const SetUpView = lazy(() => import('@views/SetUpView'));

const Router = () => (
  <Suspense>
    <Routes>
      <Route element={<NonAuthLayout />}>
        <Route path={ERoutesPath.ACCOUNT_VIEW} element={<AccountView />} />
      </Route>
      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path={ERoutesPath.MAIN} element={<Home />} />
        <Route path={ERoutesPath.HOME} element={<Home />} />
        <Route path={ERoutesPath.SET_UP} element={<SetUpView />} />
      </Route>
    </Routes>
  </Suspense>
);

export default Router;
