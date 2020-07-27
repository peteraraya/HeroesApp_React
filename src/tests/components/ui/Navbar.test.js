import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { MemoryRouter, Router } from 'react-router-dom';

import { types } from '../../../types/types';

describe('Pruebas en <Navbar />', () => {

    // probaremos el History mook (función que nosotros no hemos creado) con una implementación  personalizada
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Pedro'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Pedro');
    });

    test('debe de llamar el logout  y el usar history', () => {

        // que se llame el dispath , ejecuto onClick y esto regresa una función, 
        wrapper.find('button').prop('onClick')();

        // evaluo si la función contextValue ha sido llamada o con que argumentosha sid o llamada
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });

        // evaluar el customHook : son hechos por otras personas

        expect(historyMock.replace).toHaveBeenCalledWith('/login');

    })




})



/**
 * Snapshot : toma una fotografía de como estaba el componente
 */