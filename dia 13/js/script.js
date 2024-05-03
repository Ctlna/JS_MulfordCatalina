var heroes=[]

function fetchNHeroe(){
    let personaje = document.getElementById('nPersonaje').value;
    let actor = document.getElementById('nActor').value
    let edad = document.getElementById('eActor').value
    let ubicacion = document.getElementById('ubicacion').value
    let poster = document.getElementById('poster').value
    let fecha = document.getElementById('fecha').value
    let productora = document.getElementById('productora').value

    return nuevo= {Heroe: personaje, Actor: actor, Edad:edad, Ubicacion:ubicacion, Poster:poster, Fecha:fecha, Empresa:productora};
    fetchGHeroe(nuevo);
}

function fetchGHeroe(nuevo){
    let guardar = document.querySelector('gHeroe');
    guardar.addEventListener('click',function(){
        heroes.push(nuevo);
    })
}