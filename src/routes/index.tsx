import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from '@common-components/layout';

const Home = lazy(() => import('@views/Home'));
const LoginView = lazy(() => import('@views/Login'));
const SignUpView = lazy(() => import('@views/SignUp'));

const Router = () =>
  <Suspense>
    <Routes>
      {/* Main */}
      <Route path="/" element={<Home />} />
      {/*Non Auth */}
      <Route>
        <Route path="/sign-up" element={<SignUpView />} />
        <Route path="/login" element={<LoginView />} />
      </Route>
      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path="/auth" element={<Home />} />
      </Route>
    </Routes>
  </Suspense>

export default Router