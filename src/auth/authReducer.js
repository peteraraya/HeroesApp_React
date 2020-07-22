import { types } from '../types/types';

// resultado esperado si esta logeado
// const state={
//     name: 'Peter',
//     logged: true
// }

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }

        default:
            return state;
    }
}



/**
 * 1. Un reducer no es más que una simple función pura
 * 2. Un reducer recibe un state que va ser un obejeto, y recibe un action que es lo que uno quiere hacer (función de flecha)
 * 3. Crearemos un archivo type para evitar volativilidad de nombres en el switchcase
 * 4. Se recomienda utilizar el default del switch siempre
 */