import React from 'react';
import useFetch from '../hooks/useFetch';
import Item from './material/Item';

export default function Inventario() {
    const item= useFetch(urlApiItem,null);
    return (
        <div>
            <Item items={item} />
        </div>
    )
}
function urlApiItem(urlApiItem: any, arg1: null) {
    throw new Error('Function not implemented.');
}

