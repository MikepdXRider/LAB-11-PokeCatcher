// import functions and grab DOM elements
import { renderPokemon } from './render-pokemon.js';
import { cathPokemon } from './data-utils.js'
 
window.addEventListener('load', () =>{
    renderPokemon();
});

const catchButton = document.querySelector('#catch-button');

// initialize global state
let PokeCaught = 0;


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


    }
}); 
