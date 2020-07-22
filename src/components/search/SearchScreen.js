import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history}) => {
    // extraemos la location
    const location = useLocation();
    // console.log(queryString.parse(location.search));

    const { q = '' } = queryString.parse( location.search );
    // console.log(q);
    
    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    
    const { searchText } = formValues;
    
    // evitar re-rederizado ya que con esto guardo memo
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ])

    
    const handleSearch = (e) =>{
        e.preventDefault();
        // utilización  useForm ( Custom Hook )
        // console.log(searchText);
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1> SearchScreen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-block btn-outline-primary mt-1"
                        >
                            Search ....
                        </button>

                    </form>
                </div>
                <div className="col-7">
                    <h4> Results</h4>
                    <hr />

                    { 
                        (q === '') 
                            &&
                            <div className="alert alert-info">
                            Search a hero
                            </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            There is no a hero with { q }    
                        </div>
                    }

                    {

                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={ hero.id }
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
