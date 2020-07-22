import React from 'react';
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom';


export const PublicRoutes = ({

    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                (!isAuthenticated)
                    ? (<Component {...props} />) // si no está autenticado
                    : (<Redirect to="/" />) // si está autenticado lo enviamos al dashboard
            )}
        />
    )
}

PublicRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

