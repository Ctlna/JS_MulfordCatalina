function fetchSwapi(){
    xhr = new XMLHttpRequest();
    let url = `https://swapi.py4e.com/api/people/1/`
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if (this.readyState===4 && this.status===200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            funcionar(response);
        }
        else if(this.readyState===4){
            console.log('Error: ',this.statusText);

        }
    };
    xhr.send();
}
function funcionar(dataL){
    let info=document.getElementById('espacio')
    if (dataL.response==="error"){
        info.innerHTML=`<p>Error:${dataL.error}</p>`;
    }
    else{
        info.innerHTML=`
        <p></p>
        <p>Name:${dataL.name}</p>
        <p>Height:${dataL.height}</p>
        <p>Mass:${dataL.mass}</p>
        <p>Hair-color:${dataL.hair_color}</p>
        <p>Skin-color:${dataL.skin_color}</p>
        <p>Eye-color:${dataL.eye_color}</p>
        <p>Birth-year:${dataL.birth_year}</p>
        <p>Gender:${dataL.gender}</p>
        <p></p>

        <p>Homeworld:</p>
        <p><a href= ${dataL.homeworld}>${dataL.homeworld}</a></p>

        <p></p>

        <p>Films:</p>
        <p><a href ="${dataL.films}">${dataL.films}</a></p>
        <p><a href ="${dataL.films}">${dataL.films}</a></p>
        <p><a href ="${dataL.films}">${dataL.films}</a></p>
        <p><a href ="${dataL.films}">${dataL.films}</a></p>
        <p><a href ="${dataL.films}">${dataL.films}</a></p>
        <p></p>

        <p>Species:</p>
        <p><a href="${dataL.species}">${dataL.species}</a></p>
        <p></p>

        <p>Vehicles:</p>
        <p><a href= ${dataL.vehicles}>${dataL.vehicles}</a></p>
        <p></p>

        <p>Starships:</p>
        <p><a href="${dataL.starships}">${dataL.starships}</a></p>
        
        <p>Created: ${dataL.created}</p>
        <p>Edited: ${dataL.edited}</p>
        <p>url:</p>
        <p><a href= ${dataL.url}>${dataL.url}</a></p>
        `}
}