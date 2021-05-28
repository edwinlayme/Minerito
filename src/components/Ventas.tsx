import React from 'react';
import useFetch from '../hooks/useFetch';
import { urlApiVenta } from '../utils/venta';
import Venta from './venta/Venta';

export default function Ventas() {
    const venta=useFetch(urlApiVenta,null);
    return (
        <div>
             <Venta ventas={venta}/>
        </div>
    )
}
