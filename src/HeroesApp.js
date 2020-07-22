import React, { useReducer, useEffect } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
// Estado inicial para leer el localStorage
const init = () => {
    // revisa si tenemos el objeto lo va retornar y si no existe voy a retornar un obejto que tenga logged en false
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}


export const HeroesApp = () => {
    // Con esto tengo la habilidad de hacer dispath y de obtener el usuario a lo largo de cualquier parte de la aplicación
    const [user, dispatch] = useReducer(authReducer, {}, init);

    // Efecto que geaba en el localstorage si el usuario cambia , este efecto : tendra comoo dependencia el usuario y qur se dispara cada vez qu e el usuario cambie
    // y grabar ese usuario en localstorage

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}


