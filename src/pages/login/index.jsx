import React from 'react'
import { AuthContext } from '../context/Context';
import { FormLogin } from './Form';

export const Login = () => {
  
  return (
    <AuthContext>
        <FormLogin />
    </AuthContext>
  )
}
