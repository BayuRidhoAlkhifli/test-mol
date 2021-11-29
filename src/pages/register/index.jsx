import React, {useState} from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { AuthContext } from '../context/Context';
import { FormRegister } from './Form';

export const Register = () => {
  
  return (
    <AuthContext>
      <FormRegister />
    </AuthContext>
  )
}
