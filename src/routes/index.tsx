import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from '../common-components/layout/AuthLayout'

const Home = lazy(() => import('../views/Home'));
const Test = lazy(() => import('../views/Test'));
const LoginView = lazy(() => import('../views/Authentication/LoginView'));
const SignUpView = lazy(() => import('../views/Authentication/SignUpView'));

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
        <Route path="/auth" element={<Test />} />
      </Route>
    </Routes>
  </Suspense>

export default Router