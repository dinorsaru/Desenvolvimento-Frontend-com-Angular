
const pokemonList = document.getElementById('pokemonList')
const offset = 0 
const limit = 10    
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


// conversao de pokemon API dados em HTML

function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol> class="type">
                    <li class="typef">Planta</li>
                    <li class="typef">Veneno</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/1.png" alt="${pokemon.name}">
            </div>
        </li>
    `
}

/*processamento assicrono para obter a promessa de uma resposta
 */


pokemonList.innerHTML += '<li>teste</li>'



fetch(url)
    .then((response) => response.json()) // modo simplificado ---- converter o body para json
    .then((jsonBody) => jsonBody.result) // resultado da conversao passa a ser a lista pokemon
    .then((pokemons) => {
        
        for (let i = 0; i < pokemons.lenght; i++) {
            const pokemon = pokemons[i]
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }

    })
    .catch((error)=> console.log(error))
    

    
    /*
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    }) // modo simplificado ---- converter o body para json
    .then((jsonBody) => jsonBody.result) // resultado da conversao passa a ser a lista pokemon
    .then((pokemons) => {
        console.log(pokemons);
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }

    })
    .catch((error)=> console.log(error))
*/