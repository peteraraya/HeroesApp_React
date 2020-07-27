import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";


import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoutes } from './PublicRoutes';


export const AppRouter = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes
                        exact
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated={user.logged}
                    />

                    <PrivateRoute
                        path="/"
                        component={DashboardRoutes}
                        isAuthenticated={user.logged}
                    />
                </Switch>
            </div>
        </Router>
    )
}


/**
 * El route que direcciona al hijo no debe incluir el atributo exact
 */