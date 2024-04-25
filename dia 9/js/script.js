function fetchSwapi(){
    xhr = new XMLHttpRequest();
    let url = `https://swapi.py4e.com/api/people/1/`
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if (this.readyState===4 && this.status===200){
            let response = JSON.parse(this.responseText);
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
        
        `
        fetch(dataL.homeworld)
        .then(response=>response.json())
        .then(homeworldDataL=>{
            const homeworldI = `
            <p>Name: ${homeworldDataL.name} </p> 
            <p>Rotation Period: ${homeworldDataL.rotation_period} </p> 
            <p>Orbital Period: ${homeworldDataL.orbital_period} </p> 
            <p>Diameter: ${homeworldDataL.diameter} </p> 
            <p>Climate: ${homeworldDataL.climate} </p> 
            <p>Gravity: ${homeworldDataL.gravity} </p> 
            <p>Terrain: ${homeworldDataL.terrain} </p> 
            <p>Surface Water: ${homeworldDataL.surface_water} </p> 
            <p>Population: ${homeworldDataL.population} </p> 
            <p>Created: ${homeworldDataL.created} </p> 
            <p>Edited: ${homeworldDataL.edited} </p> 
            <p>url: ${homeworldDataL.url} </p> 
            `
        });
        `
        <p>Films:</p>`
        fetch(dataL.films[0])
        .then(response=>response.json())
        .then(filmsDataL=>{
            const filmsI = 
            `
            <p>Name: ${filmsDataL.name} </p>
            <p>Episode: ${filmsDataL.episode} </p>
            <p>Opening crawl: ${filmsDataL.opening_crawl} </p>
            <p>Director: ${filmsDataL.director} </p>
            <p>Producer: ${filmsDataL.producer} </p>
            <p>Release date: ${filmsDataL.release_date} </p>
            <p>Created: ${filmsDataL.created} </p>
            <p>Edited: ${filmsDataL.edited} </p>
            <p>url: ${filmsDataL.url} </p>
            `;
            document.getElementById('film').innerHTML=
            `<p>Film:</p> ${filmsI} `
        });
        
        `
        <p><a href ="https://swapi.py4e.com/api/films/1/">Films 1</a></p>
        <p><a href ="https://swapi.py4e.com/api/films/2/">Films 2</a></p>
        <p><a href ="https://swapi.py4e.com/api/films/3/">Films 3</a></p>
        <p><a href ="https://swapi.py4e.com/api/films/6/">Films 6</a></p>
        <p><a href ="https://swapi.py4e.com/api/films/7/>Films 7</a></p>
        <p></p>
        `
        
        `
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