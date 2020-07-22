const { heroes } = require("../data/heroes");


export const getHeroesByPublisher = ( publisher ) =>{

    // validaremos que se envie la información correcta
     const validPublishers = ['DC Comics', 'Marvel Comics'];

    // en caso de que el elemento enviado no coincida con el arreglo
    if ( !validPublishers.includes( publisher ) ) {
        // disparo este mensaje de error
        throw new Error(`Publisher "${ publisher }" no es correcto!! `)
     }

     // retorno la data
     return heroes.filter( hero => hero.publisher === publisher);

}