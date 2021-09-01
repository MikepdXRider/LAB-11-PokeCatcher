// import functions and grab DOM elements
import { renderPokemon } from './render-pokemon.js';
import { catchPokemon, getRandomPokemon } from './data-utils.js';

const pokemonSection = document.querySelector('.pokemon-section');
 

window.addEventListener('load', () =>{
    let ranPokeArr = getRandomPokemon(); 
    renderPokemon(ranPokeArr);
});

const catchButton = document.querySelector('#catch-button');

// initialize global state
let pokeCaught = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
catchButton.addEventListener('click', () => { 
    const checkedInput = document.querySelector('input:checked');  
    if (checkedInput === null) {
        throw new Error('You must select a pokemon!');
    } else {
        const userInput = Number(checkedInput.value);
        catchPokemon(userInput);
      // *Increment and check of pokeCaught could be a ManageCaughtAcc() function
        pokeCaught++;
        console.log(pokeCaught);
        if (pokeCaught === 10){
            window.location.href = './z_results-page/';
        }
      // * 
      
        console.log(`Check status`, Number(checkedInput.value));
        while (pokemonSection.firstChild) {
            pokemonSection.removeChild(pokemonSection.firstChild);
        }
    
        renderPokemon(getRandomPokemon());
    }
}); 
