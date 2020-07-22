import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    // utilizamos useMemo con la misma funcion y las dependencias el input del publisher si este cambia
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);


    // aquí recibo el publisher
    // const heroes = getHeroesByPublisher( publisher ); 

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    >

                    </HeroCard>
                ))
            }
        </div>
    )
}
