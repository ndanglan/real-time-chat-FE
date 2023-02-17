import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthLayout, NonAuthLayout } from '@common-components/layout';
import { ERoutes } from '@variables';

const Home = lazy(() => import('@views/Home'));
const AccountView = lazy(() => import('@views/AccountView'));

const Router = () =>
  <Suspense>
    <Routes>
      <Route element={<NonAuthLayout />}>
        <Route path={ERoutes.ACCOUNT_VIEW} element={<AccountView />} />
      </Route>
      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path={ERoutes.MAIN} element={<Home />} />
        <Route path={ERoutes.HOME} element={<Home />} />
      </Route>
    </Routes>
  </Suspense>

export default Router