import React from 'react';
import { Button, Container, Row, Table } from 'react-bootstrap';
import Loading from '../loading/Loading';

export default function Proveedor(props: { providers: { result: any; loading: any; error: any; }; }) {
    const {
        providers:{result, loading, error}
    } = props;
    return (
        <Container>
            <h4 className="text-center bg-info">Panel de Proveedores</h4>
         <Row>
         <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th className="text-danger">Id_Proveedor</th>
                    <th>Nombre Proveedor</th>
                    <th>Dirección</th>
                    <th>Opción</th>
                  </tr>
                </thead>
             {loading || !result 
             ? 
             <Loading/>
             : result.map((provider: any,index: any)=>(
                <tbody>
                 <tr>
                    <td className="text-danger">{provider.idproveedor}</td>
                    <td>{provider.nombreprov}</td>
                    <td>{provider.direccion}</td>
                    <td><Button>Editar</Button></td>
                  </tr>
                 </tbody> 
                ))}
            </Table>
         </Row>
        </Container>
    );
}