import React from 'react';
import { Button, Container, Row, Table } from 'react-bootstrap';
import Loading from '../loading/Loading';

export default function User(props: { users: { result: any; loading: any; error: any; }; }) {
    const {
        users:{result, loading, error}
    } = props;
    return (
        <Container>
           <h4 className="text-center">Lista de Usuarios</h4>
         <Row>
         <Table striped bordered hover size="sx">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Nombre Usuario</th>
                    <th>Correo</th>
                    <th>Fono</th>
                    <th>Rol</th>
                    <th>Opción</th>
                  </tr>
                </thead>
             {loading || !result 
             ? 
             <Loading/>
             : result.map((user: any,index: any)=>(
                <tbody>
                 <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.fono}</td>
                    <td className="text-danger">{user.role}</td>
                    <td><Button>Editar</Button></td>
                  </tr>
                 </tbody>                        
        ))}
         </Table>
         </Row>
        </Container>
    );
}


