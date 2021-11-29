import React from 'react'
import { AuthContext } from '../context/Context';
import { LandingPage } from './LandingPage';

export const Dashboard = () => {
  
  return (
    <AuthContext>
        <LandingPage />
    </AuthContext>
  )
}
