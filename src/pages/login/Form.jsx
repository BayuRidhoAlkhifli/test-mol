import React, {useState,useEffect} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useContextLogin } from '../context/Context';
import { useNavigate } from 'react-router-dom'


export const FormLogin = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { loginForm, setLoginForm } = useContextLogin();
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const router = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("DataUser")))
  }, [])

  const onSubmit = data => {

    if (user === null) {
      alert("You have to register first")
    }else{
      if(user.email === data.email && user.password === data.password) {
        router('/dashboard')
      }else{
        alert("Wrong Email or Password")
      }
    }
    
  };


  return(
    <section>
      <div className="mb-4">
        <h2>
          Login
        </h2>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email"
            placeholder="Enter email"
            {...register("email")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Button variant="link" onClick={() => router('/register')}>
          Register
        </Button>
      </Form>
    </section>
  )
}
