## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

<hr>

1. Start with ACL bootstrap/template.

## Catcher Page
User should be able to... (user story) elect one of three DIFFERENT pokemon and click the catch button. Then show the user three more (different) pokemon. After 10 pokemon are caught, redirect to the results page.

### HTML Setup
- Button
- 3 divs with images to show the pokemon.
- Radio buttons(hidden like in the rock paper scissors app).

### Events
- User loads the page: 
	- call `renderPokemon()`

- User clicks catch button:
	- Figure out the ID of the pokemon that was captured.
		- call `catchPokemon()`
		- Increment pokeCaught accumulator.
		- Now, if pokeCaught is greater than 9, redirect to 
	- Access local storage to get the current caught/viewed pokemon.
	- call `renderPokemon()`

### Functions
- `renderPokemon()`
	- We need to find three more unique pokemon to show the user.
		- `getRandomPokemon()`
		- Whenever we find 3 new pokemon, we need to track that they have now been "seen".
		- call `encounterPokemon()` on all 3 new pokemon.
        - create HTML elements w/ radio buttons for each pokemon. (see RPS project)
        - set necessary attributes to each HTML element.
        - append nesting HTML elements as necessary.
        - final append to DOM.

- `getRandomPokemon()`
	- Does the hard work of finding three unique and ranodm pokemon from our raw data.
	- return an array of three random pokemon.

	![[Pasted image 20210831104644.png]]
	
	``` js
	import {pokemon} from './data.js'
	
	export function getRandomPokemon(){
		const threePokemon = [];
		
		let randomIndex1 = Math.Floor(Math.random() * pokemon.length);
		let randomIndex2 = Math.Floor(Math.random() * pokemon.length);
		let randomIndex3 = Math.Floor(Math.random() * pokemon.length);
		
		alert(randomIndexes)
		
		while (randomIndex1 === randomIndex2 
			|| randomIndex1 === randomIndex3
			|| randomIndex3 === randomIndex2) {
			randomIndex1 = Math.Floor(Math.random() * pokemon.length);
			randomIndex2 = Math.Floor(Math.random() * pokemon.length);
			randomIndex3 = Math.Floor(Math.random() * pokemon.length);
		}
		
		
		return [pokemon[randomIndex1], pokemon[randomIndex2], pokemon[randomIndex3]];
	}
	```

- `setPokedex()`
	- Takes in a pokedex, stringifies it and puts it into local storage.

- `getPokedex()`
	- retrieves and parses the pokedex in local storage.

- `encounterPokemon(id)`
	- `getPokedex()`
	- If the pokemon has been previously seen, just increment the times seen.
			- If the is the first time, make a new object with `{ id: val, encountered: 1, caught: 0}`
	- `setPokedex()`

- `catchPokemon(id)`
	- `getPokedex()`
	- No need to check if it's been encountered. If you got this far, it has been encountered.
	- Increment the 'caught' of this pokemon in local storage.
	- `setPokedex()`

### Local Storage
- Pokemon seen.
- Pokemon caught.

### Hard Coded State
- How many times has the user caught a pokemon.
	- `let pokeCaught = 0`
- STRETCH: We could derive this from our other data, just counting how many total pokemon the user has already caught: `howManyCaughtSoFar()` 


## Results Page
User should be able too... See the pokemon they caught. How many times they caught them, and how many times they encountered them. 

### HTML Setup
- Grab your data from local storage
- Render a table of values showing 'caught' and 'encounter' from your pokeDex -> this could be a (function)