const { heroes } = require("../data/heroes");
export const getHeroById = (id) => {
    // retorno la data apenas encuentre uno
    return heroes.find(hero => hero.id === id);

}