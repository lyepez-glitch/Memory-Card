function getPokemon() {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(response => {
            console.log('response', response)
            return response.json()
        }) //initial fetch of response get it as json
        .then(data => {

            //iterate through all the array object items in data.results
            //for each object item use its url to make a fetch for the image
            //then get the json of the image response obj
            //then get the prop needed for image
            //so all of these will be objects of names and images
            //then use promise.all on this array of objs

            const promises = data.results.map(pokemonObj => {

                const { name, url } = pokemonObj;

                return fetch(url)
                    .then(response => {

                        return response.json()
                    })
                    .then(pokemonData => {

                        const image = pokemonData.sprites.front_default;

                        return { name, image };
                    });
            });

            return Promise.all(promises); // Wait for all inner fetches to complete
        })
        .then(pokemons => {

            //then do what you want here
            console.log('poke data', pokemons, pokemons.length);
            // do a pokemon.foreach to use name to get the abilities https://pokeapi.co/api/v2/ability/{id or name}
            return pokemons; // Return the a
            // rray of Pokemon objects
        })
        .catch(error => {
            console.error('Error fetching Pokémon:', error);
            return []; // Return an empty array in case of error
        });
}

export default getPokemon;