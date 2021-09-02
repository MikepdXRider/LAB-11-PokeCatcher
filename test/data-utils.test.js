import { catchPokemon, encounterPokemon, getPokedex, POKEDEX, setPokedex, getRandomPokemon } from '../data-utils.js';
import pokeData from '../data.js';


const test = QUnit.test;


test('call catchPokemon, returns incremented caught relative to id', (expect) => {
    const beforeArray = [
        { id: 1, caught: 0 },
        { id: 2, caught: 0 },
        { id: 3, caught: 0 },
    ];

    const stringyPokedex = JSON.stringify(beforeArray);
    
    localStorage.setItem(POKEDEX, stringyPokedex);
    
    catchPokemon(3);

    const afterArray = [
        { id: 1, caught: 0 },
        { id: 2, caught: 0 },
        { id: 3, caught: 1 },
    ];

    const serializedPokedex = localStorage.getItem(POKEDEX);

    const actual = JSON.parse(serializedPokedex);

    expect.deepEqual(actual, afterArray);
});


test('call getPokedex, returns static array', (expect) => {
    const expected = [
        { id: 1, caught: 0 },
        { id: 2, caught: 0 },
        { id: 3, caught: 0 },
    ];

    const stringyExpected = JSON.stringify(expected);
    
    localStorage.setItem(POKEDEX, stringyExpected);

    const actual = getPokedex();

    expect.deepEqual(actual, expected);
});


test('call getPokedex with no existing storage, returns empty array', (expect) => {
    localStorage.removeItem(POKEDEX);
    
    const expected = [];

    const actual = getPokedex();

    expect.deepEqual(actual, expected);
});


test('call setPokedex with static array, manual storage get returns identical array', (expect) => {
    const expected = [
        { id: 1, caught: 0 },
        { id: 2, caught: 0 },
        { id: 3, caught: 0 },
    ];
    
    setPokedex(expected);

    const serializedPokedex = localStorage.getItem(POKEDEX);

    const actual = JSON.parse(serializedPokedex);

    expect.deepEqual(actual, expected);
});


test('call encounterPokemon with no existing storage, manual storage get returns new obj from storage', (expect) => {
    localStorage.removeItem(POKEDEX);

    encounterPokemon(pokeData[1]);

    const expected = [{
        id: 2,
        encounters: 1,
        caught: 0,
        name: 'ivysaur',
        type: 'grass'
    }];

    const serializedArr = localStorage.getItem(POKEDEX);

    const actual = JSON.parse(serializedArr);

    expect.deepEqual(actual, expected);
});


test('call encounterPokemon with existing storage, returns incremented encounter property relative to obj', (expect) => {
    const preArray = [{
        id: 1,
        encounters: 1,
        caught: 0,
        type: 'grass'
    }];

    const stringyArr = JSON.stringify(preArray);
    
    localStorage.setItem(POKEDEX, stringyArr);
    
    encounterPokemon(pokeData[0]);

    const postArray = [{
        id: 1,
        encounters: 2,
        caught: 0,
        type: 'grass'
    }];

    const serializedArr = localStorage.getItem(POKEDEX);

    const actual = JSON.parse(serializedArr);

    expect.deepEqual(actual, postArray);
});


test('call encounterPokemon with existing storage, returns the matched array', (expect) => {
    const staticArray = [
        {
            id: 1,
            encounters: 1,
            caught: 0,
            type: 'grass'
        },
        {
            id: 2,
            encounters: 1,
            caught: 0,
            type: 'grass'
        },
        {
            id: 3,
            encounters: 1,
            caught: 0,
            type: 'grass'
        },

    ];

    const stringyArr = JSON.stringify(staticArray);
    
    localStorage.setItem(POKEDEX, stringyArr);
    
    const actual = encounterPokemon(pokeData[1]);

    const expected = {
        id: 2,
        encounters: 2,
        caught: 0,
        type: 'grass'
    };

    expect.deepEqual(expected, actual);
});


test('should return three pokemon that are unique', (expect) => {
    
    const actual = getRandomPokemon();

    expect.equal(actual.length, 3, 'there should be three');

    expect.equal(!!actual[0].pokemon, true, 'the first item should be a pokemon');
    expect.equal(!!actual[1].pokemon, true, 'the second item should be a pokemon');
    expect.equal(!!actual[2].pokemon, true, 'the third item should be a pokemon');
    
    expect.equal(actual[0].id !== actual[1].id, true, 'the first and second should have different ids');
    expect.equal(actual[0].id !== actual[2].id, true, 'the first and third should have different ids');
    expect.equal(actual[1].id !== actual[2].id, true, 'the second and third should have different ids');
});