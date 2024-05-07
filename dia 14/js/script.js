var heroes=[]

document.addEventListener("DOMContentLoaded", function(){
    const guardar = document.getElementById('gHeroe');
    guardar.addEventListener('click',function(){
        let personaje = document.getElementById('personaje').value;
        let actor = document.getElementById('actor').value;
        let edad = document.getElementById('age').value;
        let ubicacion = document.getElementById('ubicacion').value;
        let poster = document.getElementById('poster').value;
        let fecha = document.getElementById('fecha').value;
        let productora = document.getElementById('productora').value;
        
        nuevo= {
            Heroe: personaje, 
            Actor: actor, 
            Edad:edad, 
            Ubicacion:ubicacion, 
            Poster:poster, 
            Fecha:fecha, 
            Productora:productora};
    
        heroes.push(nuevo);
        console.log(heroes)
        let hola = document.getElementById("aparece")
        if(hola.innerText===""){
            hola.innerHTML=`
            <p>${heroes}</p>
            `}
    });
})

function aparecera(){
    let hola = document.getElementById("aparece")
    if(hola.innerText===""){
        hola.innerHTML=`
            <div class="col">
                <div class="card border-primary mb-3" style="max-width: 100%;">
                    <div class="card-header">
                        Registro de Trajes
                    </div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">Traje del personaje</h5>
                        <p>En esta sección podrás registrar el nombre de los traje usados por el autor en cada una de las películas.</p>
                        <a class="btn btn-warning" href="#" id="addSuite" onclick="newSuit()">+</a>
                        <div class="" style="width: 100%;">
                            <div class="container body-detail" id="newInputs">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    }
}