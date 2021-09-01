import { getPokedex } from '../data-utils.js';


const pokedexData = getPokedex();


function countType(arr) {
    let grassAcc = 0;
    let bugAcc = 0;
    let waterAcc = 0;
    let fireAcc = 0;
    let normalAcc = 0;
    let typeArrGBWFN = [];
    
    arr.forEach(item => {
        if (item.type === 'grass'){
            grassAcc += item.encounters;
        }
        if (item.type === 'bug'){
            bugAcc += item.encounters;
        }
        if (item.type === 'water'){
            waterAcc += item.encounters;
        }
        if (item.type === 'fire'){
            fireAcc += item.encounters;
        }
        if (item.type === 'normal'){
            normalAcc += item.encounters;
        }
    });
    typeArrGBWFN.push(grassAcc, bugAcc, waterAcc, fireAcc, normalAcc);
    console.log(typeArrGBWFN);
    return typeArrGBWFN;
}


// Caught by name
const caughtChartEl = document.getElementById('caught-chart');


const pokedexCaughtArr = pokedexData.filter(({ caught }) => caught);
// const typesArr = pokedexData.reduce((acc, curr) =>{
//     const isInArray = boolean(
//         acc.find(item => curr.id);
//     )
// }, []);


const caughtChart = new Chart(caughtChartEl, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: pokedexData.map(({ name }) => name),
        datasets: [{
            label: '# Caught by Name',
            data: pokedexCaughtArr.map(({ caught }) => caught),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor:  [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// caught by type
const caughtTypeChartEl = document.getElementById('caught-type-chart');


const caughtTypeChart = new Chart(caughtTypeChartEl, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: ['grass', 'bug', 'water', 'fire', 'normal'],
        datasets: [{
            label: '# Caught by Type',
            data: countType(pokedexCaughtArr),
            backgroundColor: [
                'rgb(122,199,76)',
                'rgb(166,185,26)',
                'rgb(99,144,240)',
                'rgb(238,129,48)',
                'rgb(168,167,122)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// encountered by name
const encounterChartEl = document.getElementById('encounter-chart');


const encounteredChart = new Chart(encounterChartEl, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: pokedexData.map(({ name }) => name),
        datasets: [{
            label: '# Encountered by Name',
            data: pokedexData.map(({ encounters }) => encounters),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor:  [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display:true,
                ticks: {
                    suggestedMin: 0,
                    beginAtZero: true
                }
            }]
        }
    }
});


// caught by type
const encounterTypeChartEl = document.getElementById('encounter-type-chart');


const encounterTypeChart = new Chart(encounterTypeChartEl, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: ['grass', 'bug', 'water', 'fire', 'normal'],
        datasets: [{
            label: '# encounters by Type',
            data: countType(pokedexData),
            backgroundColor: [
                'rgb(122,199,76)',
                'rgb(166,185,26)',
                'rgb(99,144,240)',
                'rgb(238,129,48)',
                'rgb(168,167,122)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            // https://stackoverflow.com/questions/28990708/how-to-set-max-and-min-value-for-y-axis
            yAxes: [{
                display:true,
                ticks: {
                    suggestedMin: 0,
                    beginAtZero: true
                }
            }]
        }
    }
});





