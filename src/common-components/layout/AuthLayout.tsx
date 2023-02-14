import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { EAuthToken } from '@variables/auth-variables'

const AuthLayout = () => {
  const isAuthenticated = localStorage.getItem(EAuthToken.ACCESS_TOKEN);
  if (!isAuthenticated) {
    return <Navigate to="/" replace={true} />
  }
  return (
    <Outlet />
  )
}

export default AuthLayout