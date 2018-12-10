const hbs = require('hbs');


//helpers funciones que se disparan cuando el template lo requiere
hbs.registerHelper('getAnho', ()=>{
    return new Date().getFullYear();
});

//helper funcion para cambiar la primera letra de cada palabra en mayusculas
hbs.registerHelper('capitalizar', (texto)=>{
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx)=>{
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});