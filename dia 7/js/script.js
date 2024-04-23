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
        hInfo.innerHTML=`        <p></p>
        <p>image:</p>
        <p><img src="${data.image.url}"/></p>
        <p></p>
        <p>Name:${data.name}</p>
        <p>Powerstats:
        <p>Inteligencia:${data.powerstats.intelligence}
        <p>Strength:${data.powerstats.strength}
        <p>Spped:${data.powerstats.speed}
        <p>Durability:${data.powerstats.durability}
        <p>Power:${data.powerstats.power}
        <p>Combat:${data.powerstats.combat}
        <p></p>
        <p>Biography:
        <p>Full-Name:${data.biography.full_name}
        <p>Alter-Egos:${data.biography.alter_egos}
        <p>Aliases:${data.biography.aliases}
        <p>Place-of-Birth:${data.biography.place_of_birth}
        <p>First_Appearance:${data.biography.first_appearance}
        <p>Publisher:${data.biography.publisher}
        <p>Alignment:${data.biography.alignment}
        <p></p>
        <p>Appearance:
        <p>Gender:${data.appearance.gender}
        <p>Race:${data.appearance.race}
        <p>Height:${data.appearance.height}
        <p>Weight:${data.appearance.weight}
        <p>Eye-Color:${data.appearance.eye_color}
        <p>Hair-Color:${data.appearance.hair_color}
        <p></p>
        <p>Work:
        <p>Occupation:${data.work.occupation}
        <p>Base:${data.work.base}
        <p></p>
        <p>Connections:
        <p>Group-Affiliation:${data.connections.group_affiliation}
        <p>Relatives:${data.connections.relatives}
        `
    }
}