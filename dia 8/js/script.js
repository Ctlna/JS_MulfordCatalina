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
        <p><img src="${dataL.url}"/></p>
        <p></p>
        <p>Films:${dataL.name}</p>
        <p><img src="${dataL.films.url}"/></p>
        <p><img src="${dataL.films.url}"/></p>
        <p><img src="${dataL.films.url}"/></p>
        <p><img src="${dataL.films.url}"/></p>
        <p><img src="${dataL.films.url}"/></p>
        <p></p>
        <p>Name:${dataL.name}</p>
        <p>Name:${dataL.name}</p>
        <p>Name:${dataL.name}</p>
        <p>Name:${dataL.name}</p>
        <p>Name:${dataL.name}</p>
        <p>Name:${dataL.name}</p>
        `}
}
/*        <p>link:</p>
<p><img src="${dataL.films.url}"/></p>
<p></p>*/