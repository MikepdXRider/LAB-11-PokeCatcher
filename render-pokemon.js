import { encounterPokemon, getPokedex } from "./data-utils.js";

const pokemonSection = document.querySelector('.pokemon-section');

export function renderPokemon(arr){
    arr.forEach(obj => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        const pokeContainerDiv = document.createElement('div');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        const textContainerDiv = document.createElement('div');
        const caughtP = document.createElement('p');
        const encountersP = document.createElement('p');
        const typeP = document.createElement('p');
            
        input.setAttribute('type', 'radio');
        input.setAttribute('value', `${obj.id}`);
        input.setAttribute('name', 'pokemon');
        pokeContainerDiv.classList.add('pokemon-card-container');
        img.src = `${obj.url_image}`;
        textContainerDiv.classList.add('card-text-container');
            
        const poke = encounterPokemon(obj);

        h3.textContent = obj.pokemon;
        encountersP.textContent = `Encounters: ${poke.encounters}`;
        caughtP.textContent = `Caught: ${poke.caught}`;
        typeP.textContent = `Type: ${poke.type}`;

        textContainerDiv.append(caughtP, encountersP, typeP);
        pokeContainerDiv.append(h3, img, textContainerDiv);
        label.append(input, pokeContainerDiv);
        pokemonSection.append(label);
    });
}


