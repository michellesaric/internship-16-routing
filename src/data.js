export const fetchPokemons = () => 
    fetch("http://localhost:3000/pokemon").then((response) => {
        return response.json();
    });

export const fetchPokemonDetails = (pokemonId) => 
    fetch(`http://localhost:3000/pokemon/${pokemonId}`).then((response) => {
        return response.json();
    })

export const createPokemon = (pokemon) => 
    fetch("http://localhost:3000/pokemon", {
        method: "POST",
        body: JSON.stringify(pokemon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());

export const updatePokemon = (pokemon) => 
    fetch(`http://localhost:3000/pokemon/${pokemon.id}`, {
        method: "PUT",
        body: JSON.stringify(pokemon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());

export const deletePokemon = (pokemon) => 
    fetch(`http://localhost:3000/pokemon/${pokemon.id}`, {
        method: "DELETE",
        body: JSON.stringify(pokemon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());

export const fetchDigimons = () => 
    fetch("http://localhost:3000/digimon").then((response) => {
        return response.json();
    });

export const fetchDigimonDetails = (digimonId) => 
    fetch(`http://localhost:3000/digimon/${digimonId}`).then((response) => {
        return response.json();
    })

export const createDigimon = (digimon) => 
    fetch("http://localhost:3000/digimon", {
        method: "POST",
        body: JSON.stringify(digimon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());

export const updateDigimon = (digimon) => 
    fetch(`http://localhost:3000/digimon/${digimon.id}`, {
        method: "PUT",
        body: JSON.stringify(digimon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());

export const deleteDigimon = (digimon) => 
    fetch(`http://localhost:3000/digimon/${digimon.id}`, {
        method: "DELETE",
        body: JSON.stringify(digimon),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());