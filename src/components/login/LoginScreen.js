import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

  // Extaeremos el context
  const { dispatch } = useContext(AuthContext);


  const handleLogin = () => {

    // history.push('/');
    // realizo el replace de la history
    // history.replace('/');
    // enviar en dispath  un objeto con un name

    // leemos el path de localstorage 
    const lastPath = localStorage.getItem('lastPath' || '/');

    // dispararemos la acción 
    dispatch({
      type: types.login, // con esta instrucción tenemos menos margen de error
      payload: {
        name: 'Pedro'
      }
    });
    // reemplazamos  por la variable que tiene la ultima ruta
    history.replace(lastPath);

  }


  return (
    <>
      <h1>Login Screen</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={handleLogin}

      >
        Login
            </button>
    </>
  )
}

/**
 * Redireccionaremos con history push
 */