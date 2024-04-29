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
        }
        else if(this.readyState===4){
            console.log('Error: ',this.statusText);
        }
    }; 
    xhro.send();
}
