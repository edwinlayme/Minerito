import React from 'react'
import { Card, Form } from 'react-bootstrap';

export const LoginAdmin = (props: {history:any}) => { 
    const handleLogin = () => {
        //history.push('/');
     props.history.replace("/");
    }
    return (
        <div className="container mt-5 bg-light">
            <h1>Login Administrador</h1>
            <hr />
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Administrador:</Form.Label>
    <Form.Control type="text" placeholder="Ingresar User Admin" />
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
        </div>
    )
}
