import React from 'react'
import { Card } from 'react-bootstrap';

export const LoginScreen = (props: {history:any}) => { 
    const handleLogin = () => {
        //history.push('/');
     props.history.replace("/loginadmin");
    }
    const handleLoginUser = () => {
        //history.push('/');
     props.history.replace("/loginuser");
    }

    return (
        <div className="container mt-5 bg-light">
            <h1>Seleccionar Usuario</h1>
            <hr />
            <Card>
            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Usuario Administrador
            </button>
            <br/>
            <button
                className="btn btn-info"
                onClick={ handleLoginUser }
            >
                Usuario Empleado
            </button>
            </Card>
        </div>
    )
}
