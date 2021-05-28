import React from 'react';
import { Button, Container, Row, Table } from 'react-bootstrap';
import Loading from '../loading/Loading';

export default function Venta(props: { ventas: { result: any; loading: any; error: any; }; }) {
    const {
        ventas:{result, loading, error}
    } = props;
    return (
        <Container>
           <h4 className="text-center bg-info">Reporte de ventas</h4>
         <Row>
         <Table striped bordered hover size="sx">
                <thead>
                  <tr>
                    <th className="text-danger">Id_Venta</th>
                    <th>Fecha Venta</th>
                    <th>Monto</th>
                    <th>Id_Cliente</th>
                    <th>Opción</th>
                  </tr>
                </thead>
             {loading || !result 
             ? 
             <Loading/>
             : result.map((venta: any,index: any)=>(
                <tbody>
                 <tr>
                    <td className="text-danger">{venta.idventa}</td>
                    <td>{venta.fechaventa}</td>
                    <td>{venta.monto}</td>
                    <td>{venta.idcliente}</td>
                    <td><Button>Editar</Button></td>
                  </tr>
                 </tbody>                        
        ))}
         </Table>
         </Row>
        </Container>
    );
}


