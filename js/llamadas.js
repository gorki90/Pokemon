'use-strict'

var urlGen1="https://pokeapi.co/api/v2/pokemon?offset=0&limit=151";
var gen1=[];
var gen1Details=[];

var urlGen2="https://pokeapi.co/api/v2/pokemon?offset=151&limit=100";
var gen2=[];
var gen2Details=[];

var urlGen3="https://pokeapi.co/api/v2/pokemon?offset=251&limit=135";
var gen3=[];
var gen3Details=[];

var urlGen4="https://pokeapi.co/api/v2/pokemon?offset=386&limit=108";
var gen4=[];
var gen4Details=[];

var urlGen5="https://pokeapi.co/api/v2/pokemon?offset=494&limit=155";
var gen5=[];
var gen5Details=[];

var urlGen6="https://pokeapi.co/api/v2/pokemon?offset=649&limit=72";
var gen6=[];
var gen6Details=[];

var urlGen7="https://pokeapi.co/api/v2/pokemon?offset=721&limit=88";
var gen7=[];
var gen7Details=[];

var urlGen8="https://pokeapi.co/api/v2/pokemon?offset=809&limit=89";
var gen8=[];
var gen8Details=[];

var urlArc="https://pokeapi.co/api/v2/pokemon?offset=898&limit=7";
var genArc=[];
var genArcDetails=[];

var urlGen9="https://pokeapi.co/api/v2/pokemon?offset=905&limit=120";
var gen9=[];
var gen9Details=[];

var urlOthers="https://pokeapi.co/api/v2/pokemon?offset=1025&limit=277";
var genOthers=[];
var genOthersDetails=[];

var urlAll="https://pokeapi.co/api/v2/pokemon?offset=0&limit=1025";
var genCatchThemAll=[];
var genCatchThemAllDetails=[];

var idPokemon;
var urlPokemonEspecifico="https://pokeapi.co/api/v2/pokemon/";

var regions;
var urlRegions="https://pokeapi.co/api/v2/region";

var clima;
var apiKey="8d8762550b731973ffc025fb51cd1775";

function collectGen1(){
    fetch(urlGen1)
    .then(response => {
        if (!response.ok) {
            throw new Error('Respuesta no correcta');
        }
        return response.json();
    })
    .then(async data => {

        gen1=data;
        for(let i=0;i<gen1.results.length;i++){
            const response = await fetch(gen1.results[i].url);
            const data2 = await response.json();
            gen1Details.push(data2);
        }
        generarTarjetas(gen1Details);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function collectGen2(){
    fetch(urlGen2)
    .then(response => {
        if (!response.ok) {
            throw new Error('Respuesta no correcta');
        }
        return response.json();
    })
    .then(async data => {

        gen2=data;
        for(let i=0;i<gen2.results.length;i++){
            const response = await fetch(gen2.results[i].url);
            const data2 = await response.json();
            gen2Details.push(data2);
        }
        generarTarjetas(gen2Details);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function collectGen3(){
    fetch(urlGen3)
    .then(response => {
        if (!response.ok) {
            throw new Error('Respuesta no correcta');
        }
        return response.json();
    })
    .then(async data => {

        gen3=data;
        for(let i=0;i<gen3.results.length;i++){
            const response = await fetch(gen3.results[i].url);
            const data2 = await response.json();
            gen3Details.push(data2);
        }
        generarTarjetas(gen3Details);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function collectGen4(){
    fetch(urlGen4)
    .then(response => {
        if (!response.ok) {
            throw new Error('Respuesta no correcta');
        }
        return response.json();
    })
    .then(async data => {

        gen4=data;
        for(let i=0;i<gen4.results.length;i++){
            const response = await fetch(gen4.results[i].url);
            const data2 = await response.json();
            gen4Details.push(data2);
        }
        generarTarjetas(gen4Details);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function collectGen5(){
    fetch(urlGen5)
    .then(response => {
        if (!response.ok) {
            throw new Error('Respuesta no correcta');
        }
        return response.json();
    })
    .then(async data => {

        gen5=data;
        for(let i=0;i<gen5.results.length;i++){
            const response = await fetch(gen5.results[i].url);
            const data2 = await response.json();
            gen5Details.push(data2);
        }
        generarTarjetas(gen5Details);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function collectGen6(){
    fetch(urlGen6)
    .then(response => {
        if (!response.ok) {
            throw new Error('Respuesta no correcta');
        }
        return response.json();
    })
    .then(async data => {

        gen6=data;
        for(let i=0;i<gen6.results.length;i++){
            const response = await fetch(gen6.results[i].url);
            const data2 = await response.json();
            gen6Details.push(data2);
        }
        generarTarjetas(gen6Details);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function collectGen7(){
    fetch(urlGen7)
    .then(response => {
        if (!response.ok) {
            throw new Error('Respuesta no correcta');
        }
        return response.json();
    })
    .then(async data => {

        gen7=data;
        for(let i=0;i<gen7.results.length;i++){
            const response = await fetch(gen7.results[i].url);
            const data2 = await response.json();
            gen7Details.push(data2);
        }
        generarTarjetas(gen7Details);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function collectGen8(){
    fetch(urlGen8)
    .then(response => {
        if (!response.ok) {
            throw new Error('Respuesta no correcta');
        }
        return response.json();
    })
    .then(async data => {

        gen8=data;
        for(let i=0;i<gen8.results.length;i++){
            const response = await fetch(gen8.results[i].url);
            const data2 = await response.json();
            gen8Details.push(data2);
        }
        generarTarjetas(gen8Details);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function collectGen10(){
    fetch(urlArc)
    .then(response => {
        if (!response.ok) {
            throw new Error('Respuesta no correcta');
        }
        return response.json();
    })
    .then(async data => {

        genArc=data;
        for(let i=0;i<genArc.results.length;i++){
            const response = await fetch(genArc.results[i].url);
            const data2 = await response.json();
            genArcDetails.push(data2);
        }
        generarTarjetas(genArcDetails);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function collectGen9(){
    fetch(urlGen9)
    .then(response => {
        if (!response.ok) {
            throw new Error('Respuesta no correcta');
        }
        return response.json();
    })
    .then(async data => {

        gen9=data;
        for(let i=0;i<gen9.results.length;i++){
            const response = await fetch(gen9.results[i].url);
            const data2 = await response.json();
            gen9Details.push(data2);
        }
        generarTarjetas(gen9Details);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function collectGen11(){
    fetch(urlOthers)
    .then(response => {
        if (!response.ok) {
            throw new Error('Respuesta no correcta');
        }
        return response.json();
    })
    .then(async data => {

        genOthers=data;
        for(let i=0;i<genOthers.results.length;i++){
            const response = await fetch(genOthers.results[i].url);
            const data2 = await response.json();
            genOthersDetails.push(data2);
        }
        generarTarjetas(genOthersDetails);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function collectAll(){
    fetch(urlAll)
    .then(response => {
        if (!response.ok) {
            throw new Error('Respuesta no correcta');
        }
        return response.json();
    })
    .then(async data => {

        genCatchThemAll=data;
        for(let i=0;i<genCatchThemAll.results.length;i++){
            const response = await fetch(genCatchThemAll.results[i].url);
            const data2 = await response.json();
            genCatchThemAllDetails.push(data2);
        }
        tarjetasResumen();
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function regionsCall(){

    fetch(urlRegions)
    .then(response =>{
        if (!response.ok){
            throw new Error ('Respuesta no correcta');
        }
        return response.json();
    })
    .then(data=>{
        regions=data.results;
    })
    .catch(error=>{
        console.error('There was a problem with the fetch operation:', error);
    })


}


async function climaCall(pais){

    var urlClima="https://api.openweathermap.org/data/2.5/weather?q="+pais+"&appid="+apiKey+"&units=metric&lang=sp";

   try {
        const response = await fetch(urlClima);
        if (!response.ok) {
            throw new Error('Respuesta no correcta');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

collectAll();
regionsCall();




