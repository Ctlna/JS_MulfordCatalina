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
        <p>${datos.id} ${datos.name}</p>
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