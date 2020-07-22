import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

  const { heroeId } = useParams();
  // console.log(heroeId);


  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  // const hero = getHeroById(heroeId);

  // console.log(hero);

  // si el heroe no existe 
  if (!hero) {
    return <Redirect to="/" />
  }

  const handleReturn = () => {

    // Valdación de revisión de length del historial
    if (history.length <= 2) {
      history.push('/');
    } else {
      // vuelvo a la pagina anterior
      history.goBack();
    }

  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail shadow animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong> Alter ego :</ strong> {alter_ego}
          </li>
          <li className="list-group-item">
            <strong> Publisher : </ strong>{publisher}
          </li>
          <li className="list-group-item">
            <strong> First Appearance : </ strong>{first_appearance}
          </li>
        </ul>

        <h5>Characters</h5>
        <p>{characters}</p>


        <button
          className="btn btn-outline-info"
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  )
}


/**
 * useParams :  no permite extraer los parametros que vallan por el url
 * useMemo   :  evita que renderizemos nuevamente el componente
 */