import React from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import Loading from '../loading/Loading';

import './Itemstyle.scss';

export default function Item(props: { items: { result: any; loading: any; error: any; }; }) {
    const {
        items:{result, loading, error}
    } = props;
    const item = useFetch(urlApiItem,null);
    return (
        <Container>
             <h4 className="text-center bg-info">
                 Inventario</h4>
         <Row>
         {loading || !result 
             ? 
             <Loading/>
             : result.map((item: any,index: any)=>(
               <Col className="item">
                <Card className="bg-light">   
                        <Card.Body>
                            <Card.Title className="bg-dark p-2 text-light text-center">Item: {item.item}</Card.Title>
                            <Card.Img src={item.img}  width={64} height={136}/>
                            <Card.Text className="mb-2 text-info">{item.tipo}</Card.Text>
                            <Card.Text>Pureza: {item.pureza}</Card.Text>
                            <Card.Text className="text-danger text-left">Procedencia:</Card.Text>
                            <Card.Text className="justify-content-start">{item.procedencia}</Card.Text>
                            <Card.Text>Disponible: {item.cantidad} Kg.</Card.Text> 
                            <Button variant="primary">Seleccionar</Button>
                        </Card.Body>     
                </Card>
                </Col>
                            ))}
         </Row>
        </Container>
    );
}

function urlApiItem(urlApiItem: any, arg1: null) {
    throw new Error('Function not implemented.');
}
