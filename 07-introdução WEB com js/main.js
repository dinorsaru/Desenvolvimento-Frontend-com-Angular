

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

const pokemonList = document.getElementById('pokemonList')

pokeAPI.getpokemons().then((pokemons) =>{
    const lisItens = []
   
    pokemons.map()

    for (let i = 0; i < pokemons.lenght; i++) {
        const pokemon = pokemons[i]
        lisItens.push(convertPokemonToLi(pokemon))
    }

    })