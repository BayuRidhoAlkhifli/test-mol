import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useContextRegister } from '../context/Context';
import { useNavigate } from 'react-router-dom';


export const FormRegister = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { registerForm, setRegisterForm } = useContextRegister();
  const router = useNavigate();

  const onSubmit = data => {
    localStorage.setItem("DataUser", JSON.stringify(data))
    router('/')
  };

  return(
    <section>
      <div>
        <h2>
          Register
        </h2>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="name"
            placeholder="Enter name"
            {...register("name")}
          />
        </Form.Group>

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

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </section>
  )
}
