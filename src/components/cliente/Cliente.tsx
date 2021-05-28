import React from 'react';
import { Button, Container, Row, Table } from 'react-bootstrap';
import Loading from '../loading/Loading';

export default function Cliente(props: { clientes: { result: any; loading: any; error: any; }; }) {
    const {
        clientes:{result, loading, error}
    } = props;
    return (
        <Container>
         <Row>
         <Table striped bordered hover size="sx">
                <thead>
                  <tr>
                    <th className="text-danger">Id_Cliente</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>NIT Cliente</th>
                    <th>Opción</th>
                  </tr>
                </thead>
             {loading || !result 
             ? 
             <Loading/>
             : result.map((cliente: any,index: any)=>(
                <tbody>
                 <tr>
                    <td className="text-danger">{cliente.idcliente}</td>
                    <td>{cliente.nombre}</td>
                    <td>{cliente.apellido}</td>
                    <td>{cliente.nitcliente}</td>
                    <td><Button>Editar</Button></td>
                  </tr>
                 </tbody>                        
        ))}
         </Table>
         </Row>
        </Container>
    );
}


