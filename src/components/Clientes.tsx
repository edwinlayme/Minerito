import React from 'react'
import { } from 'react-bootstrap'
import useFetch from '../hooks/useFetch';
import { urlApiCliente } from '../utils/cliente';
import Cliente from './cliente/Cliente';

export default function Clientes() {
    const cliente=useFetch(urlApiCliente,null);
    return (
        <div>
             <Cliente clientes={cliente}/>
        </div>
    );
    }