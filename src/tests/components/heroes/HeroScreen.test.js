import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

import "@testing-library/jest-dom";

describe('Pruebas en <HeroScreen />', () => {
    
    const history = {
        length:10,
        push: jest.fn(),
        goBack: jest.fn(),
    }
    
    test('debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
        
            const wrapper = mount(
                <MemoryRouter initialEntries={['/hero']}>
                    <HeroScreen history={ history } />
                </MemoryRouter>
            );
        
        expect( wrapper.find('Redirect').exists() ).toBe(true);
    });

    test('debe de mostrar un hero si el parámero existe y se encuentra', () => {
       // a diferencia de la primera  prueba necesitamos enviar los useParams
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                {/* <HeroScreen history={history} /> */}
                <Route path="/hero/:heroeId" component={ HeroScreen }/>
            </MemoryRouter>
        );

        expect( wrapper.find('.row').exists() ).toBe(true);
    });
    
    test('debe de regresar a la pantalla anterior con PUSH', () => {
        
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                {/* <HeroScreen history={history} /> */}
                <Route 
                    path="/hero/:heroeId" 
                    component={ ()=> <HeroScreen history={ history } /> } 
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        // esperamos el history y nos aseguramos que este history haya sido llamado
        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();
        
        

    });
    
    test('debe de regresar a la pantalla anterior GOBACK', () => {
       
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                {/* <HeroScreen history={history} /> */}
                <Route
                    path="/hero/:heroeId"
                    component={() => <HeroScreen history={history} />}
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        // esperamos el history y nos aseguramos que este history haya sido llamado
        expect(history.push).toHaveBeenCalledTimes(0); // que no sea llamado ninguna vez
        expect(history.goBack).toHaveBeenCalled();


    });

    test('debe de llamar el redirect si el heroe no existe', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider12313']}>
                {/* <HeroScreen history={history} /> */}
                <Route
                    path="/hero/:heroeId"
                    component={() => <HeroScreen history={history} />}
                />
            </MemoryRouter>
        );

            // console.log(wrapper.html() );
            // console.log( wrapper.find('Redirect').exists() );
            // console.log( wrapper.text().toBe() );

            expect( wrapper.text() ).toBe('');

    });
    
    


})


/**
 * Siempre debemos preguntarnos si vamos a usar shallow o mount 
 * regresa un string vacio a que no tenemos un heroe y regresa el html del redirect  que es un string vacio
 * para resoverlo le enviamos un argumneto --> initialEntries
 */
