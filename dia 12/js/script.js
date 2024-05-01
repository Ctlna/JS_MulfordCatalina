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

document.getElementById('confirma').addEventListener('click', function() {
    cosito(); 
});

function cosito(cartas){
    let imagenes=document.getElementById('lazar')
    let carat = document.getElementById('comparar');
    let confirma = document.getElementById('confirma');    
    if (cartas[0].value === "ERROR" || cartas[1].value === "ERROR" ){
        carat.innerHTML= `<p>Error: algo está mal</p>`;
        imagenes.innerHTML= `<p>Error: algo está mal</p>`;
    }
    else{
        const comprar=document.getElementById("comparar").value;
        confirma.addEventListener('click',(event) => {
            console.log("Se puso "+comprar);           

            let resultado = devolver(cartas); 

            if (comprar==="mayor"){
                if(resultado === "mayor"){
                    imagenes.innerHTML=`
                    <p>Ganaste</p>
                    <p>Tu carta era:</p>
                    <p><img src="${cartas[0].images.svg}"/></p>
                    <p>La carta del sistema era:</p>
                    <p><img src="${cartas[1].images.svg}"/></p>
                    `
                } else {
                    imagenes.innerHTML=`
                    <p>Perdiste</p>
                    <p>Tu carta era:</p>
                    <p><img src="${cartas[0].images.svg}"/></p>
                    <p>La carta del sistema era:</p>
                    <p><img src="${cartas[1].images.svg}"/></p>
                    `
                }
            }
            else if (comprar==="menor"){
                if(resultado === "menor"){
                    imagenes.innerHTML=`
                    <p>Ganaste</p>
                    <p>Tu carta era:</p>
                    <p><img src="${cartas[0].images.svg}"/></p>
                    <p>La carta del sistema era:</p>
                    <p><img src="${cartas[1].images.svg}"/></p>
                    `
                } else {
                    imagenes.innerHTML=`
                    <p>Perdiste</p>
                    <p>Tu carta era:</p>
                    <p><img src="${cartas[0].images.svg}"/></p>
                    <p>La carta del sistema era:</p>
                    <p><img src="${cartas[1].images.svg}"/></p>
                    `
                }
            }
            else if (comprar==="igual"){
                if(resultado === "igual"){
                    imagenes.innerHTML=`
                    <p>Ganaste</p>
                    <p>Tu carta era:</p>
                    <p><img src="${cartas[0].images.svg}"/></p>
                    <p>La carta del sistema era:</p>
                    <p><img src="${cartas[1].images.svg}"/></p>
                    `
                } else {
                    imagenes.innerHTML=`
                    <p>Perdiste</p>
                    <p>Tu carta era:</p>
                    <p><img src="${cartas[0].images.svg}"/></p>
                    <p>La carta del sistema era:</p>
                    <p><img src="${cartas[1].images.svg}"/></p>
                    `
                }
            }
        });
    }
}// BIEN... necesita doble click pero es más funcional

function devolver(cartas){
    let cartaCero="";
    let cartaUno="";
    // valor carta 0
    if (cartas[0].value==="QUEEN" || cartas[0].value==="KING" || cartas[0].value==="JACK"){
        cartaCero=10;
    }
    else if(cartas[0].value==="ACE"){
        cartaCero=1;
    }
    else{
        cartaCero=parseInt(cartas[0].value);
    }
    // valor carta 1
    if (cartas[1].value==="QUEEN" || cartas[1].value==="KING" || cartas[1].value==="JACK"){
        cartaUno=10;
    }
    else if(cartas[1].value==="ACE"){
        cartaUno=1;
    }
    else{
        cartaUno=parseInt(cartas[1].value);
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