import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { EAuthToken } from '@variables/auth-variables';
import { ERoutes } from '@variables';

const AuthLayout = () => {
  const isAuthenticated = localStorage.getItem(EAuthToken.ACCESS_TOKEN);
  if (!isAuthenticated) {
    return <Navigate to={ERoutes.ACCOUNT_VIEW} replace={true} />
  }
  return (
    <Outlet />
  )
}

export default AuthLayout