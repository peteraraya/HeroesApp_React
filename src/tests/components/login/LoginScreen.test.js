import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';
import '@testing-library/jest-dom';



describe('Pruebas en <LoginScreen />', () => {

    const history = {
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const wrapper = mount(

        <AuthContext.Provider value={ contextValue }>
            <LoginScreen history={history} />
        </AuthContext.Provider>
    );


    test('debe de mostrarse correctamente', () => {
        // snapshot
        expect( wrapper ).toMatchSnapshot();
    });


    test('debe de realizar el dispatch y la navegación', () => {

        // simulamos un click
        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();

        // espero que el dispath se haya llamado
        expect ( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload:{
                name:'Pedro'
            }
        });

        // esperamos que el replace de mi histoy haya sido llamado
        expect(history.replace).toHaveBeenCalledWith('/');

        // simulamos qe guardamos algo en el localStorage
        localStorage.setItem('lastPath','/dc');
        handleClick();
        expect(history.replace).toHaveBeenCalledWith('/dc');

        
    });


    
    


});
