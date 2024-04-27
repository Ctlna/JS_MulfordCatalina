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
    let info=document.getElementById('info')
    if (datos.response==="error"){
        info.innerHTML=`<p>Error:${datos.error}</p>`;
    }
    else{
        info.innerHTML=`
        <p><img src="${datos.image}"/></p>
        <p>${datos.name} ${datos.id}</p>
        `}
}