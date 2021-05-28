import React from 'react'
import useFetch from '../hooks/useFetch';
import { urlApiProveedor } from '../utils/provider';
import Proveedor from './proveedor/Proveedor';

export default function Proveedores() {
    const provider=useFetch(urlApiProveedor,null);
    return (
        <>
            <Proveedor providers={provider}/>
    </>
    )
}
