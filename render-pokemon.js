import { encounterPokemon } from './data-utils.js';


const pokemonSection = document.querySelector('.pokemon-section');


export function renderPokemon(arr){
    arr.forEach(obj => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        const pokeContainerDiv = document.createElement('div');
        const h2 = document.createElement('h2');
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

        if (poke.type === 'grass'){
            pokeContainerDiv.style.backgroundColor = 'rgb(122,199,76)';
        }
        if (poke.type === 'bug'){
            pokeContainerDiv.style.backgroundColor = 'rgb(166,185,26)';
        }
        if (poke.type === 'water'){
            pokeContainerDiv.style.backgroundColor = 'rgb(99,144,240)';
        }
        if (poke.type === 'fire'){
            pokeContainerDiv.style.backgroundColor = 'rgb(238,129,48)';
        }
        if (poke.type === 'normal'){
            pokeContainerDiv.style.backgroundColor = 'rgb(168,167,122)';
        }

        h2.textContent = obj.pokemon;
        encountersP.textContent = `Encounters: ${poke.encounters}`;
        caughtP.textContent = `Caught: ${poke.caught}`;
        typeP.textContent = `Type: ${poke.type}`;

        textContainerDiv.append(caughtP, encountersP, typeP);
        pokeContainerDiv.append(h2, img, textContainerDiv);
        label.append(input, pokeContainerDiv);
        pokemonSection.append(label);
    });
}


