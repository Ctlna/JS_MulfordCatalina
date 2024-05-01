document.addEventListener("DOMContentLoaded", function(){
    const siboton = document.getElementById("si");
    const juego = document.getElementById("juego");
    siboton.addEventListener("click", function(){
        juego.classList.toggle("hidden");
    });
});

let baraja = "";

function fetchInicio(){
    let xhr = new XMLHttpRequest();
    let url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if (this.readyState===4 && this.status===200){
            let response = JSON.parse(this.responseText);
            baraja=response.deck_id;
            console.log(baraja);
            buscar(baraja);
        }
        else if(this.readyState===4){
            console.log('Error: ',this.statusText);
        }
    };
    xhr.send();
}

function buscar(as){
    let xhro = new XMLHttpRequest();
    let url = `https://deckofcardsapi.com/api/deck/${as}/draw/?count=2`;
    xhro.open('GET',url,true);
    xhro.onreadystatechange=function(){
        if (this.readyState===4 && this.status===200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            cosito(response.cards);
        }
        else if(this.readyState===4){
            console.log('Error: ',this.statusText);
        }
    }; 
    xhro.send();
}

function cosito(cartas){
    let carat = document.getElementById('comparar');
    let confirma = document.getElementById('confirma');    
    if (cartas[0].value === "error" || cartas[1].value === "error"){
        carat.innerHTML= `<p>Error: algo está mal</p>`;
    }
    else{
        const comprar=document.getElementById("comparar").value;
        confirma.addEventListener('click',(event) => {
            console.log("Se puso "+comprar);           // BIEN... se repite pero está bien

            let resultado = devolver(cartas); // Llamada a la función devolver para determinar el resultado

            if (comprar==="mayor"){
                if(resultado === "mayor"){
                    console.log("Ganaste");
                } else {
                    console.log("Perdiste");
                }
            }
            else if (comprar==="menor"){
                if(resultado === "menor"){
                    console.log("Ganaste");
                } else {
                    console.log("Perdiste");
                }
            }
            else {
                if(resultado === "igual"){
                    console.log("Ganaste");
                } else {
                    console.log("Perdiste");
                }
            }
        });
    }
}

document.getElementById('confirma').addEventListener('click', function() {
    cosito(); 
});

function devolver(ruta){
    let cartaCero="";
    let cartaUno="";
    // valor carta 0
    if (ruta[0].value==="QUEEN" || ruta[0].value==="KING" || ruta[0].value==="JACK"){
        cartaCero=10;
    }
    else if(ruta[0].value==="ACE"){
        cartaCero=1;
    }
    else{
        cartaCero=parseInt(ruta[0].value);
    }
    // valor carta 1
    if (ruta[1].value==="QUEEN" || ruta[1].value==="KING" || ruta[1].value==="JACK"){
        cartaUno=10;
    }
    else if(ruta[1].value==="ACE"){
        cartaUno=1;
    }
    else{
        cartaUno=parseInt(ruta[1].value);
    }
    //
    if (cartaCero>cartaUno){
        return "mayor";
    }
    else if(cartaCero<cartaUno){
        return "menor";
    }
    else{
        return "igual";
    }
}
