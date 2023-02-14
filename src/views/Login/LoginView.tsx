import React, { useState } from 'react'
import './Login.scss'
import { useDispatch } from 'react-redux'
import { loginRequest } from '@stores/auth-store/actions'
import { ELoginType } from '@variables/auth-variables'
import { Dispatch } from 'redux'
import { AuthActions } from '../../stores/auth-store/types'

interface Props { }

const LoginView = (props: Props) => {
  const dispatch = useDispatch<Dispatch<AuthActions>>();
  const [email, setEmail] = useState('')
  const [password, setPassworđ] = useState('')
  return (
    <div className='auth'>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" value={password} onChange={(e) => setPassworđ(e.target.value)} />
      <button onClick={() => {
        dispatch(loginRequest({ email, password }, (response) => console.log({ response })))
      }}>Login</button>
      <button onClick={() => {
        dispatch(loginRequest({ type: ELoginType.FACEBOOK }, (response) => console.log({ response })))
      }}>FB</button>
      <button onClick={() => {
        dispatch(loginRequest({ type: ELoginType.GOOGLE }, (response) => console.log({ response })))
      }}>GG</button>
    </div>
  )
}

export default LoginView