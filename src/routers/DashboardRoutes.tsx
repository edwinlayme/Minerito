import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import User from '../components/user/User';
import Inicio from '../components/Inicio';
import Clientes from '../components/Clientes';
import { NavBar } from '../components/ui/NavBar';
import Main from '../components/ui/Main';
import InicioUser from '../components/InicioUser';
import { LoginUser } from '../components/login/LoginUser';
import { LoginAdmin } from '../components/login/LoginAdmin';
import Usuarios from '../components/Usuarios';
import Ventas from '../components/Ventas';
import Proveedores from '../components/Proveedores';
import Inventario from '../components/Inventario';


export const DashboardRoutes = () => {
    return (
        <>
         <NavBar/>
                      <div className="container mt-2">
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route exact path="/loginuser" component={ LoginUser } />
                    <Route exact path="/loginadmin" component={ LoginAdmin } />
                    <Route exact path="/dashboard" component={InicioUser} />
                    <Route exact path="/users" component={ Usuarios } />
                    <Route exact path="/clientes" component={ Clientes } /> 
                    <Route exact path="/ventas" component={ Ventas } />
                    <Route exact path="/proveedores" component={ Proveedores } />
                     <Route exact path="/materiales" component={ Inventario } />
                  
                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}
