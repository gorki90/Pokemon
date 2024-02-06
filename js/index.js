'use-strict'

const regionesCiudades = {
    kanto: "tokyo,jp",
    johto: "osaka,jp",
    hoenn: "fukuoka,jp",
    galar: "london,uk",
    hisui: "sapporo,jp",
    kalos: "paris,fr",
    paldea: "Bilbao,es",
    sinnoh: "sapporo,jp",
    unova: "boston,us",
    alola: "honolulu,us"
};

function colorFondo(tipo){


    switch (tipo) {
        case "steel":

            return "#89A1B0";

        case "water":

            return "#539AE2";

        case "rock":

            return "#B2A061";

        case "psychic":

            return "#E5709B";

        case "poison":

            return "#B468B7";

        case "normal":

            return "#AAB09F";

        case "ice":

            return "#70CBD4";

        case "ground":

            return "#CC9F4F";

        case "grass":

            return "#71C558";

        case "ghost":

            return "#846AB6";

        case "flying":

            return "#7DA6DE";

        case "fire":

            return "#EA7A3C";

        case "fighting":

            return "#CB5F48";

        case "fairy":

            return "#E397D1";

        case "electric":

            return "#E5C531";

        case "dragon":

            return "#6A7BAF";

        case "dark":

            return "#736C75";

        case "bug":

            return "#94BC4A";
    }

}

function aplicarColor(tipo, tipo2, numTarjetas){
let tarjetas=document.getElementsByClassName("card")

if(numTarjetas>=0  && numTarjetas < tarjetas.length){
    let tarjeta = tarjetas[numTarjetas];
    if (tipo2) {
        let color1 = colorFondo(tipo);
        let color2 = colorFondo(tipo2);
        tarjeta.style.background=`linear-gradient(to right, ${color1}, ${color2} 100%)`;
    }else{
        let color = colorFondo(tipo);
        tarjeta.style.background=color;
    }
}
}

function tarjetasResumen(){
    let main=document.getElementById("main");


    //Tarjetas de las 3 regiones random

    let numero = Math.floor(Math.random() * genCatchThemAllDetails.length);
    let numero2 = Math.floor(Math.random() * genCatchThemAllDetails.length);
    let numero3 = Math.floor(Math.random() * genCatchThemAllDetails.length);

    let region1, region2, region3;

region1 = Math.floor(Math.random() * regions.length);

do {
    region2 = Math.floor(Math.random() * regions.length);
} while (region2 === region1);

do {
    region3 = Math.floor(Math.random() * regions.length);
} while (region3 === region1 || region3 === region2);


let nombreReg1=document.getElementById("reg1");
let nombreRegion1=regions[region1].name;
let nombreRegion1Capitalizado=capitalizarPrimeraLetra(nombreRegion1);
nombreReg1.innerText=nombreRegion1Capitalizado;
let fotReg1=document.getElementById("fotReg1");
fotReg1.src="assets/images/"+regions[region1].name+".png";

regreandom1.addEventListener("click",function(){
    let regionSeleccionada = regions[region1].name;
    mostrarRegion(regionSeleccionada);
    main.style.display="none";
})

let nombreReg2=document.getElementById("reg2");
let nombreRegion2=regions[region2].name;
let nombreRegion2Capitalizado=capitalizarPrimeraLetra(nombreRegion2);
nombreReg2.innerText=nombreRegion2Capitalizado;
let fotReg2=document.getElementById("fotReg2");
fotReg2.src="assets/images/"+regions[region2].name+".png";

regreandom2.addEventListener("click",function(){
    let regionSeleccionada = regions[region2].name;
    mostrarRegion(regionSeleccionada);
    main.style.display="none";
})

let nombreReg3=document.getElementById("reg3");
let nombreRegion3=regions[region3].name;
let nombreRegion3Capitalizado=capitalizarPrimeraLetra(nombreRegion3);
nombreReg3.innerText=nombreRegion3Capitalizado;
let fotReg3=document.getElementById("fotReg3");
fotReg3.src="assets/images/"+regions[region3].name+".png";

regreandom3.addEventListener("click",function(){
    let regionSeleccionada = regions[region3].name;
    mostrarRegion(regionSeleccionada);
    main.style.display="none";
})

    //Tarjetas de los 3 pokemon random

    let nombre = document.getElementById("pok1");
    let nombrePokemon = genCatchThemAllDetails[numero].name;
    let nombreCapitalizado = capitalizarPrimeraLetra(nombrePokemon);
    nombre.innerText = nombreCapitalizado;
    let fot=document.getElementById("pokefoto1");
    fot.src=genCatchThemAllDetails[numero].sprites.front_default;
    let tipo=document.getElementById("Primary");
    let tipos = genCatchThemAllDetails[numero].types;
    let boton1=document.getElementById("btn1");

    boton1.addEventListener("click",function(){
    mostrarDetallesPokemon(genCatchThemAllDetails[numero])
    main.style.display="none";
}) 
 

    if(tipos.length==2){
        tipo.innerText=capitalizarPrimeraLetra(tipos[0].type.name)+"/"+capitalizarPrimeraLetra(tipos[1].type.name);
        aplicarColor(tipos[0].type.name,tipos[1].type.name,3);
    }else{
       tipo.innerText=capitalizarPrimeraLetra(tipos[0].type.name);
       aplicarColor(tipos[0].type.name,null,3)
    }

    let nombre2 = document.getElementById("pok2");
    let nombrePokemon2 = genCatchThemAllDetails[numero2].name;
    let nombreCapitalizado2 = capitalizarPrimeraLetra(nombrePokemon2);
    nombre2.innerText = nombreCapitalizado2;
    let fot2=document.getElementById("pokefoto2");
    fot2.src=genCatchThemAllDetails[numero2].sprites.front_default;
    let tipo2=document.getElementById("Primary2");
    let tipos2 = genCatchThemAllDetails[numero2].types;
    let boton2=document.getElementById("btn2");

    boton2.addEventListener("click",function(){
    mostrarDetallesPokemon(genCatchThemAllDetails[numero2]);
    main.style.display="none";
})

    if(tipos2.length==2){
        tipo2.innerText=capitalizarPrimeraLetra(tipos2[0].type.name)+"/"+capitalizarPrimeraLetra(tipos2[1].type.name);
        aplicarColor(tipos2[0].type.name,tipos2[1].type.name,4);
    }else{
       tipo2.innerText=capitalizarPrimeraLetra(tipos2[0].type.name);
       aplicarColor(tipos2[0].type.name,null,4)
    }

    let nombre3 = document.getElementById("pok3");
    let nombrePokemon3 = genCatchThemAllDetails[numero3].name;
    let nombreCapitalizado3 = capitalizarPrimeraLetra(nombrePokemon3);
    nombre3.innerText = nombreCapitalizado3;
    let fot3=document.getElementById("pokefoto3");
    fot3.src=genCatchThemAllDetails[numero3].sprites.front_default;
    let tipo3=document.getElementById("Primary3");
    let tipos3 = genCatchThemAllDetails[numero3].types;
    let boton3=document.getElementById("btn3");

    boton3.addEventListener("click",function(){
    mostrarDetallesPokemon(genCatchThemAllDetails[numero3]);
    main.style.display="none";
    })

    if(tipos3.length==2){
        tipo3.innerText=capitalizarPrimeraLetra(tipos3[0].type.name)+"/"+capitalizarPrimeraLetra(tipos3[1].type.name);
        aplicarColor(tipos3[0].type.name,tipos3[1].type.name,5);
    }else{
       tipo3.innerText=capitalizarPrimeraLetra(tipos3[0].type.name);
       aplicarColor(tipos3[0].type.name,null,5)
    }
}

function capitalizarPrimeraLetra(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function mostrarDetallesPokemon(pokeEspecifico) {
    console.log('Mostrando detalles del Pokémon:', pokeEspecifico);

    const detallesPokemonElement = document.getElementById('detallesPokemonElement');

    detallesPokemonElement.innerHTML = '';
    // Verificar si el contenedor existe
    if (!detallesPokemonElement) {
        console.error('El elemento detallesPokemonElement no se encontró.');
        return;
    }

    // Crear elementos HTML para los detalles
    const foto = document.createElement('img');
    foto.src = pokeEspecifico.sprites.front_default;
    foto.classList.add('pokefoto', 'img-fluid');

    const foto2 = document.createElement('img', "img-fluid");
    foto2.src = pokeEspecifico.sprites.back_default ? pokeEspecifico.sprites.back_default : 'assets/images/black.png'
    foto2.classList.add('pokefoto');

    const nombre = document.createElement('h1');
    nombre.textContent = capitalizarPrimeraLetra(pokeEspecifico.name);
    nombre.classList.add('pokeDatos');

    const altura = document.createElement('p');
    altura.textContent = `Altura: ${pokeEspecifico.height}`;
    altura.classList.add('pokeDatos');

    const peso = document.createElement('p');
    peso.textContent = `Peso: ${pokeEspecifico.weight}`;
    peso.classList.add('pokeDatos');

    const expBase = document.createElement('p');
    expBase.textContent = `Experiencia Base: ${pokeEspecifico.base_experience}`;
    expBase.classList.add('pokeDatos');

    // Crear elementos para el colapso
    const botonColapso = document.createElement('button');
    botonColapso.classList.add('btnDetalles', 'btn-primary');
    botonColapso.type = 'button';
    botonColapso.setAttribute('data-bs-toggle', 'collapse');
    botonColapso.setAttribute('data-bs-target', '#collapseElement');
    botonColapso.setAttribute('aria-expanded', 'false');
    botonColapso.setAttribute('aria-controls', 'collapseElement');
    botonColapso.textContent = 'Mostrar Stats y Movimientos';

    const colapsoElement = document.createElement('div');
    colapsoElement.classList.add('collapse');
    colapsoElement.id = 'collapseElement';

    const colapsoContenido = document.createElement('div');
    colapsoContenido.classList.add('card', 'card-body');
    // Crear la tabla
    const tabla = document.createElement('table');
    tabla.classList.add('table'); // Añadir la clase de Bootstrap para una tabla
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Crear la fila de encabezado
    const encabezadoFila = document.createElement('tr');
    const encabezadoStats = document.createElement('th');
    encabezadoStats.textContent = 'Stats';
    const encabezadoValor = document.createElement('th');
    encabezadoValor.textContent = 'Valor';

    encabezadoFila.appendChild(encabezadoStats);
    encabezadoFila.appendChild(encabezadoValor);
    thead.appendChild(encabezadoFila);

    // Recorrer el array de stats y crear filas para cada uno
    pokeEspecifico.stats.forEach(stat => {
        const fila = document.createElement('tr');
        const statNombre = document.createElement('td');
        statNombre.textContent = stat.stat.name;
        const statValor = document.createElement('td');
        statValor.textContent = stat.base_stat;

        fila.appendChild(statNombre);
        fila.appendChild(statValor);
        tbody.appendChild(fila);
    });

    // Agregar elementos al documento
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    colapsoContenido.appendChild(tabla);
    colapsoElement.appendChild(colapsoContenido);

    detallesPokemonElement.appendChild(foto);
    detallesPokemonElement.appendChild(foto2);
    detallesPokemonElement.appendChild(nombre);
    detallesPokemonElement.appendChild(altura);
    detallesPokemonElement.appendChild(peso);
    detallesPokemonElement.appendChild(expBase);
    if (pokeEspecifico.types.length === 2) {
        const tipo1 = document.createElement('p');
        tipo1.textContent = `Tipo: ${capitalizarPrimeraLetra(pokeEspecifico.types[0].type.name)}/${capitalizarPrimeraLetra(pokeEspecifico.types[1].type.name)}`;
        tipo1.classList.add('pokeDatos');
        detallesPokemonElement.appendChild(tipo1);
    } else {
        const tipo1 = document.createElement('p');
        tipo1.textContent = `Tipo: ${pokeEspecifico.types[0].type.name}`;
        tipo1.classList.add('pokeDatos');
        detallesPokemonElement.appendChild(tipo1);
    }

    detallesPokemonElement.appendChild(botonColapso);
    detallesPokemonElement.appendChild(colapsoElement);
    colapsoElement.appendChild(colapsoContenido);
    

    pokeEspecifico.moves.sort((a, b) => {
        return a.version_group_details[0].level_learned_at - b.version_group_details[0].level_learned_at;
    });

// Crear elemento para los movimientos
const movimientos = document.createElement('div');
movimientos.classList.add('movimientos');

// Agregar los movimientos
pokeEspecifico.moves.forEach(move => {
    const moveContainer = document.createElement('div');

    const moveName = document.createElement('p');
    moveName.classList.add("text-center", "nombreMove");
    moveName.textContent = `Movimiento: ${capitalizarPrimeraLetra(move.move.name)}`;

    const moveDetails2 = document.createElement('p');
    moveDetails2.textContent = `A nivel: ${move.version_group_details[0].level_learned_at}`;

    const moveDetails3 = document.createElement('p');
    moveDetails3.textContent =`Método de aprendizaje: ${capitalizarPrimeraLetra(move.version_group_details[0].move_learn_method.name)}`;


    moveContainer.appendChild(moveName);
    moveContainer.appendChild(moveDetails2);
    moveContainer.appendChild(moveDetails3);

    movimientos.appendChild(moveContainer);
});

// Crear elementos para el colapso
const colapsoElement2 = document.createElement('div');
colapsoElement.classList.add('collapse');
colapsoElement2.id = 'collapseElement';

const colapsoContenido2 = document.createElement('div');
colapsoContenido2.classList.add('card', 'card-body');

colapsoContenido2.appendChild(movimientos);
colapsoElement.appendChild(colapsoContenido2);


}

function mostrarPokes(){
    let main=document.getElementById("main");
    let pokes=document.getElementById("pokemons");
    let detalles=document.getElementById("detallesPokemonElement");
    let tarjetasPoke=document.getElementById("tarjetasPoke");
    let regionesPoke=document.getElementById("regiones");
    let datosRegiones=document.getElementById("datosRegiones")
    main.style.display="none";
    pokes.style.display="block";
    detalles.style.display="none";
    tarjetasPoke.style.display="none";
    regionesPoke.style.display="none";
    datosRegiones.style.display="none";
}

function tarjetasGens(id){
    
    const functionGen = `collectGen${id}`;

    window[functionGen]();
}

function generarTarjetas(datosPokemon){

    let main=document.getElementById("main");
    let pokes=document.getElementById("pokemons");
    let detalles=document.getElementById("detallesPokemonElement");
    main.style.display="none";
    pokes.style.display="none";
    detalles.style.display="none";

    let tarjetasPoke=document.getElementById("tarjetasPoke");
    tarjetasPoke.style.display="block";
// Obtener el contenedor donde se mostrarán las tarjetas
const contenedorTarjetas = document.getElementById('tarjetasPoke');

// Limpiar el contenido existente en el contenedor
contenedorTarjetas.innerHTML = '';

// Iterar sobre los datos de los Pokémon y crear tarjetas para cada uno
const lista = document.createElement('ul');

    // Iterar sobre los datos de los Pokémon y crear elementos de lista para cada uno
    datosPokemon.forEach(pokemon => {
        // Crear elemento de lista
        const elementoLista = document.createElement('li');

        // Crear imagen del Pokémon
        const imagenPokemon = document.createElement('img');
        imagenPokemon.src = pokemon.sprites.front_default;
        imagenPokemon.classList.add('pokemon-imagen'); // Puedes agregar estilos personalizados

        // Crear título del Pokémon
        const tituloPokemon = document.createElement('h5');
        tituloPokemon.classList.add('pokemon-titulo');
        tituloPokemon.textContent = capitalizarPrimeraLetra(pokemon.name);

        // Agregar elementos a la lista
        elementoLista.appendChild(imagenPokemon);
        elementoLista.appendChild(tituloPokemon);

        elementoLista.addEventListener('click', function () {
            mostrarDetallesPokemon(pokemon);
            let main=document.getElementById("main");
            let pokes=document.getElementById("pokemons");
            let detalles=document.getElementById("detallesPokemonElement");
            let tarjetasPoke=document.getElementById("tarjetasPoke");
            tarjetasPoke.style.display="none";
            main.style.display="none";
            pokes.style.display="none";
            detalles.style.display="block";

        });

        // Agregar elemento de lista a la lista
        lista.appendChild(elementoLista);
    });

    // Agregar lista al contenedor
    contenedorTarjetas.appendChild(lista);

}

function mostrarRegion(region){
    const detallesRegiones = document.getElementById('datosRegiones');
    detallesRegiones.classList.add("container-fluid");

    let main=document.getElementById("main");
    let pokes=document.getElementById("pokemons");
    let detalles=document.getElementById("detallesPokemonElement");
    let tarjetasPoke=document.getElementById("tarjetasPoke");
    let regionesPoke=document.getElementById("regiones");
    main.style.display="none";
    pokes.style.display="none";
    detalles.style.display="none";
    tarjetasPoke.style.display="none";
    regionesPoke.style.display="none";
    detallesRegiones.style.display="block";

    detallesRegiones.innerHTML = '';

    let nombre=document.createElement("h1");
    let name=capitalizarPrimeraLetra(region);
    nombre.textContent=name;
    nombre.classList.add("text-center","nombreRegion");
    detallesRegiones.append(nombre);

let foto=document.createElement("img");
foto.src="/assets/images/"+region+".png";
foto.classList.add("img-fluid", "rounded");
detallesRegiones.append(foto);

let pokedex=document.createElement("div");
pokedex.classList.add("pokedex","container-fluid");
detallesRegiones.append(pokedex);

let numPokedex=document.createElement("h3");
numPokedex.textContent="En esta generación podemos encontrar las siguientes Pokedex:";
numPokedex.classList.add("text-center");
pokedex.append(numPokedex);


let versiones=document.createElement("div")
let version=document.createElement("h3");
version.textContent="Esta región la puedes visitar en los siguientes juegos:";
version.classList.add("text-center");
versiones.append(version);


fetch(urlRegions+"/"+region)
.then(response=>{
    if (!response.ok){
        throw new Error ('Respuesta no correcta');
    }
    return response.json();
})  
.then(regionData => {
    let pokedexContainer = document.createElement("div");
    pokedexContainer.classList.add("pokedex");
    detallesRegiones.append(pokedexContainer);

    regionData.pokedexes.forEach(pokedex => {
        let pokedexElement = document.createElement("p");
        pokedexElement.textContent = pokedex.name;
        pokedexContainer.append(pokedexElement);
    });
    detallesRegiones.append(versiones);
    regionData.version_groups.forEach(version=>{
        let versionElement=document.createElement("p");
        versionElement.textContent=version.name;
        versiones.append(versionElement);
    })
})
.catch(error=>{
    console.error('There was a problem with the fetch operation:', error);
});


    let ciudad = regionesCiudades[region.toLowerCase()];

    climaCall(ciudad)
    .then(clima => {

        let climaContainer = document.createElement("div");
        climaContainer.classList.add("climaContainer","container-fluid");
        
        let tit=document.createElement("h3");
        tit.textContent="El tiempo ahora en "+name+":";
        tit.classList.add("text-center");
        climaContainer.append(tit);

        let descripcion=document.createElement("p");
        descripcion.textContent=capitalizarPrimeraLetra(clima.weather[0].description);
        climaContainer.append(descripcion);

        let icono=document.createElement("img");
        icono.src= "https://openweathermap.org/img/wn/"+clima.weather[0].icon+"@2x.png";
        climaContainer.append(icono);

        let temp=document.createElement("p");
        temp.textContent="Temperatura actual: "+clima.main.temp+" °C";
        climaContainer.append(temp);

        let sensacion=document.createElement("p");
        sensacion.textContent="Sensación térmica: "+clima.main.feels_like+" °C";
        climaContainer.append(sensacion);

        let tempMax=document.createElement("p");
        tempMax.textContent="Temperatura máxima: "+clima.main.temp_max+" °C";
        climaContainer.append(tempMax);

        let tempMin=document.createElement("p");
        tempMin.textContent="Temperatura mínima: "+clima.main.temp_min+" °C";
        climaContainer.append(tempMin);

        let humedad=document.createElement("p");
        humedad.textContent="Humedad: "+clima.main.humidity+"%";
        climaContainer.append(humedad);

        let viento=document.createElement("p");
        viento.textContent="Viento: "+clima.wind.speed+" Km/h";
        climaContainer.append(viento);

        detallesRegiones.append(climaContainer);

        console.log(clima);
        console.log(region);
    })
    .catch(error => {
        console.error(error);
    }); 

}

function mostrarRegiones(){

    let main=document.getElementById("main");
    let pokes=document.getElementById("pokemons");
    let detalles=document.getElementById("detallesPokemonElement");
    let tarjetasPoke=document.getElementById("tarjetasPoke");
    let regionesPoke=document.getElementById("regiones");
    let datosRegiones=document.getElementById("datosRegiones")

    main.style.display="none";
    pokes.style.display="none";
    detalles.style.display="none";
    tarjetasPoke.style.display="none";
    regionesPoke.style.display="block";
    datosRegiones.style.display="none";
    
}

function buscarPokemon(event) {
    event.preventDefault();

    const inputBusqueda = document.getElementById('inputBusqueda');
    const terminoBusqueda = inputBusqueda.value.toLowerCase();

    let pokemonEncontrado = null;

    // Recorremos el array de pokemons para buscar aquel cuyo nombre coincide con el término de búsqueda
    for (let i = 0; i < genCatchThemAllDetails.length; i++) {
        if (genCatchThemAllDetails[i].name.toLowerCase() === terminoBusqueda) {
            pokemonEncontrado = genCatchThemAllDetails[i];
            break; // Salimos del bucle una vez que se encuentra el pokemon
        }
    }

    if (pokemonEncontrado) {
        let tarjetasPoke=document.getElementById("tarjetasPoke");
        let main=document.getElementById("main");
        let pokes=document.getElementById("pokemons");
        let detalles=document.getElementById("detallesPokemonElement");
        let regionesPoke=document.getElementById("regiones");
        let detallesRegiones = document.getElementById('datosRegiones');
        main.style.display="none";
        pokes.style.display="none";
        detalles.style.display="block";
        regionesPoke.style.display="none";
        detallesRegiones.style.display="none";
        tarjetasPoke.style.display="none";
        mostrarDetallesPokemon(pokemonEncontrado);
    } else {
        // Si no se encuentra el pokemon, redirigir al usuario a la página de inicio y mostrar un mensaje de error
        window.location.href = 'index.html'; // Cambia 'index.html' a la ruta de tu página de inicio
        alert('No se encontró ningún Pokémon con ese nombre.');
    }
}
