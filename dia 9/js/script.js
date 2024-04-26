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
        <table class="table table-striped-columns table-info">
            <th>
                <tr>
                    <td class="text-success-emphasis">Name</td>
                    <td class="text-center">${dataL.name}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Height</td>
                    <td class="text-center">${dataL.height}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Mass</td>
                    <td class="text-center">${dataL.mass}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Hair-color</td>
                    <td class="text-center">${dataL.hair_color}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Skin-color</td>
                    <td class="text-center">${dataL.skin_color}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Eye-color</td>
                    <td class="text-center">${dataL.eye_color}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Birth-year</td>
                    <td class="text-center">${dataL.birth_year}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Gender</td>
                    <td class="text-center">${dataL.gender}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Created</td>
                    <td class="text-center">${dataL.created}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Edited</td>
                    <td class="text-center"> ${dataL.edited}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">url</td>
                    <td class="text-center"><a href="${dataL.starships}">${dataL.starships}</a></td>
                </tr>

            </th>
            
        </table>
        `
        dataL.films.forEach(filmLink => {
            fetch(filmLink)
            .then(response => response.json())
            .then(filmsDataL => {
                const filmsI =`
                <table class="table table-striped-columns table-info">
                    <th>
                        <tr>
                            <td class="text-success-emphasis">Title</td>
                            <td class="text-center">${filmsDataL.title}</td>
                        </tr>
                        <tr>
                            <td class="text-success-emphasis">Episode</td>
                            <td class="text-center">${filmsDataL.episode_id}</td>
                        </tr>
                        <tr>
                            <td class="text-success-emphasis">Opening crawl</td>
                            <td class="text-center">${filmsDataL.opening_crawl}</td>
                        </tr>
                        <tr>
                            <td class="text-success-emphasis">Director</td>
                            <td class="text-center">${filmsDataL.director}</td>
                        </tr>
                        <tr>
                            <td class="text-success-emphasis">Producer</td>
                            <td class="text-center">${filmsDataL.producer}</td>
                        </tr>
                        <tr>
                            <td class="text-success-emphasis">Release date</td>
                            <td class="text-center">${filmsDataL.release_date}</td>
                        </tr>
                        <tr>
                            <td class="text-success-emphasis">Created</td>
                            <td class="text-center">${filmsDataL.created}</td>
                        </tr>
                        <tr>
                            <td class="text-success-emphasis">Edited</td>
                            <td class="text-center">${filmsDataL.edited}</td>
                        </tr>
                        <tr>
                            <td class="text-success-emphasis">url</td>
                            <td class="text-center">${filmsDataL.url}</td>
                        </tr>
                    </th>    
                    `;
                    document.getElementById('film').innerHTML+=
                    `<p>Film:</p> ${filmsI} 
                </table>
                    `
            });
    });
            `
        <p>Species:</p>
        <p><a href="${dataL.species}">${dataL.species}</a></p>
        <p></p>

        <p>Vehicles:</p>
        <p><a href= ${dataL.vehicles}>${dataL.vehicles}</a></p>
        <p></p>

        <p>Starships:</p>
        <p></p>
        
        <p></p>
        <p>url:</p>
        <p><a href= ${dataL.url}>${dataL.url}</a></p>
        `
         
    }
}
    /*
function fetchHome(){
    xhrH = new XMLHttpRequest();
    let url = `https://swapi.py4e.com/api/planets/1/`
    xhrH.open('GET',url,true);
    xhrH.onreadystatechange=function(){
        if (this.readyState===4 && this.status===200){
            let responde = JSON.parse(this.respondeText);
            Home(responde);
        }
        else if(this.readyState===4){
            console.log('Error: ',this.statusText);

        }
    };
    xhrH.send();
}
function Home(dataH){
    let info=document.getElementById('homeworld')
    if (dataH.responde==="error"){
        info.innerHTML=`<p>Error:${dataH.error}</p>`;
    }
    else{
        info.innerHTML=`
        <p></p>
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
    }
}

`
<p><a href ="https://swapi.py4e.com/api/films/1/">Films 1</a></p>
<p><a href ="https://swapi.py4e.com/api/films/2/">Films 2</a></p>
<p><a href ="https://swapi.py4e.com/api/films/3/">Films 3</a></p>
<p><a href ="https://swapi.py4e.com/api/films/6/">Films 6</a></p>
<p><a href ="https://swapi.py4e.com/api/films/7/>Films 7</a></p>
<p></p>
`*/