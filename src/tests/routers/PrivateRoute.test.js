import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';




describe('Pruebas en <PrivateRoutes />', () => {

    // Creamos otro argumento de forma global
    const props = {
        location:{
            pathname: '/marvel'
        }
    }
    // creamos una función jest para probar
    Storage.prototype.setItem = jest.fn();
    
    test('debe de mostrar el componente si está autenticado y guardar localstorage', () => {
        
        const wrapper = mount(
         // renderizamos el componente
            <MemoryRouter>
                <PrivateRoute
                    // evaluamos un booleano
                    isAuthenticated={ true }
                    // necesitamos el componente con función de flecha
                    component={ ()=> (<span>Listo!!!</span>) }
                    { ...props }
                />
            </MemoryRouter>
        );
        //  console.log("======= "+wrapper.html()+ " ======");
           
       expect( wrapper.find('span').exists() ).toBe(true);


        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath','/marvel');


    });


    test('debe de bloquear el componente si no está autenticado', () => {
        
        const wrapper = mount(
            // renderizamos el componente
            <MemoryRouter>
                <PrivateRoute
                    // evaluamos un booleano
                    isAuthenticated={false}
                    // necesitamos el componente con función de flecha
                    component={() => (<span>Listo!!!</span>)}
                    {...props}
                />
            </MemoryRouter>
        );
        //  console.log("======= "+wrapper.html()+ " ======");

        expect(wrapper.find('span').exists()).toBe(false);

        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');


    });
    


    

})


/**
 * <MemoryRouter></MemoryRouter> : creado para que podamos hacer pruebas con ciertas rutas, facilita para enviar información de diferentes rutas
 *  para que podamos evaluarlas
 * 
 * Pero esto implica que no podremos usar el shallow :  ya que este solo renderiza el primer componente , no renderiza lo que está dentro de este  
 * nECESITAMOS IR MÁS AL FONDO 
 */