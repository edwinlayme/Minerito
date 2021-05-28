import React from 'react'
import { Card, Form } from 'react-bootstrap';

export const LoginUser = (props: {history:any}) => { 
    const handleLogin = () => {
        //history.push('/');
     props.history.replace("/dashboard");
    }

    return (
         <div className="container mt-5 bg-light">
            <h1>Login Empleado</h1>
            <hr />
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Usuario:</Form.Label>
    <Form.Control type="email" placeholder="Ingresar Nombre de Usuario" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>
            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
            <br/>
        </div>
    );
}
