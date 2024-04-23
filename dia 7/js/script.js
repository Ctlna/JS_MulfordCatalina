function fetchSuperHero(){
    let xhr = new XMLHttpRequest();
    let hId = document.getElementById("hId").value;
    let apiKey = "487f7b22f68312d2c1bbc93b1aea445b";
    let url = `https://superheroapi.com/api.php/${apiKey}/${hId}`;
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if (this.readyState===4 && this.status===200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displayHero(response);
        }
        else if (this.readyState==4){
            console.log('Error: ',this.statusText);
        }
    };
    xhr.send();
}
function displayHero(data){
    let hInfo=document.getElementById('superHeroInfo');
    if (data.response==="error"){
        hInfo.innerHTML=`<p>Error:${data.error}</p>`;
    }
    else{
        hInfo.innerHTML=`
        <p></p>
        <p>Name:${data.name}</p>
        <p>Inteligencia:${data.powerstats}
        <p>Inteligencia:${data.powerstats.intelligence}
        <p>Inteligencia:${data.powerstats.strength}
        <p>Inteligencia:${data.powerstats.speed}
        <p>Inteligencia:${data.powerstats.durability}
        <p>Inteligencia:${data.powerstats.power}
        <p>Inteligencia:${data.powerstats.combat}
        <p></p>
        <p>Inteligencia:${data.biography}
        <p>Inteligencia:${data.biography.full-name}
        <p>Inteligencia:${data.biography.alter-egos}
        <p>Inteligencia:${data.biography.aliases}
        <p>Inteligencia:${data.biography.place-of-birth}
        <p>Inteligencia:${data.biography.first-appearance}
        <p>Inteligencia:${data.biography.publisher}
        <p>Inteligencia:${data.biography.alignment}
        <p></p>
        <p>Inteligencia:${data.appearance}
        <p>Inteligencia:${data.appearance.gender}
        <p>Inteligencia:${data.appearance.race}
        <p>Inteligencia:${data.appearance.height}
        <p>Inteligencia:${data.appearance.weight}
        <p>Inteligencia:${data.appearance.eye-color}
        <p>Inteligencia:${data.appearance.hair-color}
        <p></p>
        <p>Inteligencia:${data.work}
        <p>Inteligencia:${data.work.occupation}
        <p>Inteligencia:${data.work.base}
        <p></p>
        <p>Inteligencia:${data.connections}
        <p>Inteligencia:${data.connections.group-affiliation}
        <p>Inteligencia:${data.connections.relatives}
        <p></p>
        <p>Inteligencia:${data.image}
        <p>Inteligencia:${data.work.url}
        `
    }
}