/* eslint-disable new-cap */
import pokeData from './data.js';


export const POKEDEX = 'POKEDEX';


export function getPokedex(){
    const stringyPokedex = localStorage.getItem(POKEDEX);

    if (stringyPokedex === null){
        return [];
    }
    
    return JSON.parse(stringyPokedex);
}


export function setPokedex(arr){
    const stringyPokedex = JSON.stringify(arr);
    
    localStorage.setItem(POKEDEX, stringyPokedex);
}


export function catchPokemon(id){
    const pokedex = getPokedex();

    pokedex.forEach(item =>{
        if (item.id === id){
            item.caught = item.caught + 1;
        }
    });
    
    setPokedex(pokedex);
}


// export function encounterPokemon(obj){
//     const pokedexArr = getPokedex();
    
//     if (pokedexArr.length === 0) {
//         const newPokeObj = {
//             id: obj.id,
//             encounters: 1,
//             caught: 0,
//             type: obj.type_1
//         };
//         pokedexArr.push(newPokeObj);
//         setPokedex(pokedexArr);
//     }

//     if (pokedexArr.length > 0){
//         for (let item of pokedexArr){
//             console.log('pokedex length', pokedexArr.length);
//             console.log('item id', item.id);
//             console.log('object id', obj.id);
//             if (obj.id === item.id){
//                 item.encounters = item.encounters + 1;
//                 console.log('encounters', item.encounters);
//             }

//             if (obj.id !== item.id) {
//                 const newPokeObj = {
//                     id: obj.id,
//                     encounters: 1,
//                     caught: 0,
//                     type: obj.type_1
//                 };
//                 pokedexArr.push(newPokeObj);
//                 setPokedex(pokedexArr);
//             }
//         }
//     }
// }

export function encounterPokemon(obj){
    const pokedexArr = getPokedex();

    const findById = pokedexArr.find(item => item.id === obj.id);

    if (!findById){
        const newObj = {
            id: obj.id,
            encounters: 1,
            caught: 0,
            type: obj.type_1
        };
        pokedexArr.push(newObj);
    }

    if (findById){
        findById.encounters++;
    }
    setPokedex(pokedexArr);
    console.log(pokedexArr.find(item => item.id === obj.id));
    return pokedexArr.find(item => item.id === obj.id);
}

    

export function getRandomPokemon(){
    let randomIndex1 = Math.floor(Math.random() * pokeData.length);
    let randomIndex2 = Math.floor(Math.random() * pokeData.length);
    let randomIndex3 = Math.floor(Math.random() * pokeData.length);
	
    while (randomIndex1 === randomIndex2 
		|| randomIndex1 === randomIndex3
		|| randomIndex3 === randomIndex2) {
        randomIndex1 = Math.floor(Math.random() * pokeData.length);
        randomIndex2 = Math.floor(Math.random() * pokeData.length);
        randomIndex3 = Math.floor(Math.random() * pokeData.length);
    }
	
    return [pokeData[randomIndex1], pokeData[randomIndex2], pokeData[randomIndex3]];
}