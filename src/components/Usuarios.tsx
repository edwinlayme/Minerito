import React from 'react';
import useFetch from '../hooks/useFetch';
import { urlApiUser } from '../utils/constant';
import User from './user/User';


export default function Usuarios() {
const user=useFetch(urlApiUser,null);
    return (
        <div>
            <User users={user}/>
        </div>
    )
}
