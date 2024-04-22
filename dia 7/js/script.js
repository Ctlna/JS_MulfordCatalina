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
        <p>Name:${data.name}</p>
        <p>Inteligencia:${data.powerstats.intelligence}`
    }
}