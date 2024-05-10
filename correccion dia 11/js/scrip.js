let pokemonID = document.getElementById("elID").value;
$("#elID").on('keypress', function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        let inputValue = this.value.trim(); 
        if (inputValue !== "") {
            let url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`;
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    poke(data);
                    mon(data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            console.log("El campo está vacío");
        }
    }
});

function poke(datos){
    let text=document.getElementById('text')
    if (datos.response==="error"){
        text.innerHTML=`<p>Error:${datos.error}</p>`;
    }
    else{
        text.innerHTML=`
        <p><span id="estoy"> ${datos.id}</span> - ${datos.name}</p>
        `}
}
function mon(datos){
    let imgen = document.getElementById("imgen");
    if(datos.response === "error"){
        imgen.innerHTML = `<p>Error ${datos.response}</p>`;
    } else if(datos.sprites.other.showdown.front_default != null){
        imgen.innerHTML = `<img class="imgen_img" src="${datos.sprites.other.showdown.front_default}"/>`;
    }else{
        imgen.innerHTML = `<img class="imgen" src="${datos.sprites.front_default}"/>`;
    }
}
function ante(){
    let id = document.getElementById("elID").innerText
    console.log(id)
    let newId = parseInt(id)
    console.log(newId)
    newId = newId - 1
    let xhr = new XMLHttpRequest();
    let url = `https://pokeapi.co/api/v2/pokemon/${newId}`
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function(){
      if(this.readyState ===4 && this.status === 200){
        let response = JSON.parse(this.responseText)
        console.log(response)
        console.log(response.name)
        displayPoke(response)
      } else if(this.readyState === 4){
        console.log("Error :(",this.statusText)
        let error = document.getElementById("showUp");
        error.innerHTML = `Error 
        `;
        let PokeSprite = document.getElementById("sprite");
        if(data.response === "error"){
          PokeSprite.innerHTML = `<p>Error ${data.response}</p>`;
        } else{
        }
      }
    }
    xhr.send();
}