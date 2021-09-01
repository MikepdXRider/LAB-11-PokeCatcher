// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getRandomPokemon } from "../data-utils.js";

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
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

