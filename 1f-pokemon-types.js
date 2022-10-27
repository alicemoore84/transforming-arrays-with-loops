function pokemonTypes(inputArray){
    let pokemonDescriptionArray = [];

    for(let pokemon of inputArray){
        let pokemonDescription = `${pokemon.name} is a ${pokemon.type} type Pokemon`;
        pokemonDescriptionArray.push(pokemonDescription);
    }


    return pokemonDescriptionArray;
}

console.log(pokemonTypes([{name: 'Bulbasaur', type: 'Grass'}, {name: 'Charmander', type: 'Fire'}]));