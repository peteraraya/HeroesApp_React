import '@testing-library/jest-dom';
import { types } from '../../types/types';
const { authReducer } = require("../../auth/authReducer");

describe('Pruebas en aurhReducer', () => {
    
    test('debe de retornar el estado por defecto', () => {

        const state = authReducer({ logged: false}, {} );
        expect( state ).toEqual({logged:false});

    });


    test('debe de autenticar y colocar el name del usuario', () => {
        // enviamos una acción entonces la crearemos

        const action = {
            type: types.login,
            payload:{
                name:'pedroncho'
            }
        };


        const state = authReducer({ logged:false }, action);
        expect( state ).toEqual({
            logged:true,
            name:'pedroncho'
        });

    });


    test('debe de borrar el usuario y logged en false', () => {
        const action = {
            type: types.logout,
        };


        const state = authReducer({ logged: false, name:'Pedro' }, action);
        expect( state ).toEqual({logged: false});

    });
    


    
    

})
