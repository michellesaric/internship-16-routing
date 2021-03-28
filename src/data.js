export const fetchPokemons = () => 
    fetch("http://localhost:3000/pokemons").then((response) => {
        return response.json();
    });

export const fetchPokemonDetails = (pokemonId) => 
    fetch(`http://localhost:3000/pokemons/${pokemonId}`).then((response) => {
        return response.json();
    })

export const createPokemon = (pokemon) => 
    fetch("http://localhost:3000/pokemons", {
        method: "POST",
        body: JSON.stringify(pokemon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());

export const updatePokemon = (pokemon) => 
    fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
        method: "PUT",
        body: JSON.stringify(pokemon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());

export const deletePokemon = (pokemon) => 
    fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
        method: "DELETE",
        body: JSON.stringify(pokemon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());

export const fetchDigimons = () => 
    fetch("http://localhost:3000/digimons").then((response) => {
        return response.json();
    });

export const fetchDigimonDetails = (digimonId) => 
    fetch(`http://localhost:3000/digimons/${digimonId}`).then((response) => {
        return response.json();
    })

export const createDigimon = (digimon) => 
    fetch("http://localhost:3000/digimons", {
        method: "POST",
        body: JSON.stringify(digimon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());

export const updateDigimon = (digimon) => 
    fetch(`http://localhost:3000/digimons/${digimon.id}`, {
        method: "PUT",
        body: JSON.stringify(digimon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());

export const deleteDigimon = (digimon) => 
    fetch(`http://localhost:3000/digimons/${digimon.id}`, {
        method: "DELETE",
        body: JSON.stringify(digimon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());