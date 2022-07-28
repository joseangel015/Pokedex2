console.log("Consultando la API de pokemon");

let listadoPokemones = [];
let listadoUrl = [];

async function getPokemons (){

    const urlPokemonResponse = "https://pokeapi.co/api/v2/pokemon/";
    const urlPokemones = "https://pokeapi.co/api/v2/pokemon/";
    const response = await fetch (urlPokemonResponse);
    const responseJson =await response.json();
    
    return new Promise((resolve,reject)=>{
        resolve(responseJson);
        reject(new Error(`No se ha podido realizar la consulta`))
    })
}
getPokemons()
    .then((pokemones)=>{
       listadoPokemones = pokemones.results;
       console.log(listadoPokemones.forEach((pokemon)=>{
       console.log(pokemon.url);
   }))
    })
    .catch((err)=>console.log(err + "Este es el error arrojado"));

const obtenerUrl = ()=>{

}

