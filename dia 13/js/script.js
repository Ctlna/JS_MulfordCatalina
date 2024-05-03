document.addEventListener("DOMContentLoaded", function(){


    const nuevoboton = document.getElementById("nHeroe");
    const espacio = document.getElementById("aparece");
    nuevoboton.addEventListener("click", function(){
        espacio.classList.toggle("hidden");
    });
});

var heroes=[]

function fetchNHeroe(){
    document.getElementById('nPersonaje').disabled = false;
    document.getElementById('eActor').disabled = false;
    document.getElementById('poster').disabled = false;
    document.getElementById('nActor').disabled = false;
    document.getElementById('ubicacion').disabled = false;
    document.getElementById('fecha').disabled = false;
    document.getElementById('productora').disabled = false;


    xhr = new XMLHttpRequest();
    let url = `https://6634ea609bb0df2359a33071.mockapi.io/`
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if (this.readyState===4 && this.status===200){
            let response = JSON.parse(this.responseText);
            heroes=response.deck_id;
            console.log(heroes);
            fetchGHeroe(heroes);
        }
        else if(this.readyState===4){
            console.log('Error: ',this.statusText);
        }
    };
    xhr.send();
}

function fetchGHeroe(link){
    let personaje = document.getElementById('nPersonaje').value;
    let actor = document.getElementById('nActor').value;
    let edad = document.getElementById('eActor').value;
    let ubicacion = document.getElementById('ubicacion').value;
    let poster = document.getElementById('poster').value;
    let fecha = document.getElementById('fecha').value;
    let productora = document.getElementById('productora').value;
    
    nuevo= {Heroe: personaje, Actor: actor, Edad:edad, Ubicacion:ubicacion, Poster:poster, Fecha:fecha, Empresa:productora};

    heroes.push(nuevo);
    console.log(heroes)
    link.push(heroes);
}
