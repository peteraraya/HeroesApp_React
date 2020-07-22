import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {

    // si no recibimos ningun string
    if (name === '') {
        return [];
    }

    name = name.toLowerCase();
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
}
