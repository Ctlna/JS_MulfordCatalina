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
    let url = `https://deckofcardsapi.com/api/deck/${as}/draw/?count=1`;
    xhro.open('GET',url,true);
    xhro.onreadystatechange=function(){
        if (this.readyState===4 && this.status===200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            cosito(response);
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
    if (cartas.response==="error"){
        carat.innerHTML= `<p>Error:${cartas.response}</p>`;
    }
    else{
        const comprar=document.getElementById("comparar").value;
        confirma.addEventListener('click',(event) => {
                console.log("Se puso "+comprar);           // BIEN... se repite pero esta bien

                if (comprar==="mayor"){
                    console.log("es mayor");
                }
                else if (comprar==="menor"){
                    console.log("es menor");
                }
                else{
                    console.log("Lo ingresado no es valido");
                }
            });
    }
}


        //carat.innerHTML= `<carat class="imagen" src="${cartas.cards.images.svg}"/>`;
