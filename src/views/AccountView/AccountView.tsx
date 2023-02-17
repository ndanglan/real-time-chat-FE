import { Button, Card, Divider } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import './AccountView.scss'

import { loginRequest, signUpRequest } from '@stores/auth-store/actions'
import { EAccountMode, ELoginType } from '@variables/auth-variables'
import { Dispatch } from 'redux'
import { AuthActions } from '@stores/auth-store/types'
import AccountForm from './components/AccountForm'
import { NonAuthLayout } from '@common-components/layout'
import Image from '@common-components/image'

import logoPng from '@assets/images/logo.png';

interface Props { }

const AccountView = (props: Props) => {
  const dispatch = useDispatch<Dispatch<AuthActions>>();
  const [accountMode, setAccountMode] = useState<EAccountMode>(EAccountMode.LOGIN);
  // const [password, setPassworđ] = useState('')

  const onChangeAccountMode = (mode: EAccountMode) => {
    setAccountMode(mode);
  }
  return (
    <NonAuthLayout className='account-view'>
      <Card className='account-container'>
        <Image
          width={200}
          src={logoPng}
        />
        <AccountForm mode={accountMode} onChangeAccountMode={onChangeAccountMode}/>
        {/* <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
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

      <button onClick={() => {
        dispatch(signUpRequest({ email, password }, (response) => console.log({ response })))
      }}>SignUp</button> */}
      </Card>
    </NonAuthLayout>
  )
}

export default AccountView