import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';


export const PrivateRoute = ({
    // enviaremos property

    isAuthenticated,
    component: Component,
    ...rest
}) => {

    // rest: tiene todo los argumentos de la ruta
    // console.log(rest.location.pathname);

    // Guardamos en localstorage
    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        // Devuelvo una ruta
        <Route {...rest}
            component={(props) => (
                // regreso estio de manera condicional
                (isAuthenticated)
                    ? (<Component {...props} />) // si está autenticado
                    : (<Redirect to="/login" />)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}



/**
 * Este funcional componente tendrá un comportamiento especial
 */