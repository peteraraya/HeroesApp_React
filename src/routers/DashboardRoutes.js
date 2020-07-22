import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {

    // console.log(props);
    return (
        <>
            <Navbar />
            <div className="container mt-3">
                <Switch>
                    {/* Definimos rutas de nuestro dashboardRoutes */}
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroeId" component={HeroScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/search" component={SearchScreen} />

                    <Redirect to="/marvel" />
                </Switch>


            </div>
        </>
    )
}

/**
 * El route hijo no tendra la Eqtiqueta Route
 * Navbar es simplemente un componente y este no tiene acceso a las rutas , es decir es simplemente un componente que tiene acceso a una ruta
 *  el history se lo enviamos al navbar
 */