// import functions and grab DOM elements
import { renderPokemon } from './render-pokemon.js';
import { catchPokemon } from './data-utils.js';
 
window.addEventListener('load', () =>{
    renderPokemon();
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
        const userInput = checkedInput.value;
        catchPokemon(userInput);
        // *Increment and check of pokeCaught could be a ManageCaughtAcc() function
        pokeCaught++;
        if (pokeCaught > 9){
            window.location = './z_results-page/';
        }
        // * 
        renderPokemon();
    }
}); 
