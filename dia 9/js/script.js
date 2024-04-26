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
        <table class="table table-striped-columns">
            <th>
                <tr>
                    <td>Name</td>
                    <td>${dataL.name}</td>
                </tr>
                <tr>
                    <td>Height</td>
                    <td>${dataL.height}</td>
                </tr>
                <tr>
                    <td>Mass</td>
                    <td>${dataL.mass}</td>
                </tr>
                <tr>
                    <td>Hair-color</td>
                    <td>${dataL.hair_color}</td>
                </tr>
                <tr>
                    <td>Skin-color</td>
                    <td>${dataL.skin_color}</td>
                </tr>
                <tr>
                    <td>Eye-color</td>
                    <td>${dataL.eye_color}</td>
                </tr>
                <tr>
                    <td>Birth-year</td>
                    <td>${dataL.birth_year}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>${dataL.gender}</td>
                </tr>
                <tr>
                    <td>Created</td>
                    <td>${dataL.created}</td>
                </tr>
                <tr>
                    <td>Edited</td>
                    <td> ${dataL.edited}</td>
                </tr>
                <tr>
                    <td>url</td>
                    <td><a href="${dataL.starships}">${dataL.starships}</a></td>
                </tr>

            </th>
            
        </table>
            
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
        fetch(dataL.films[0])
        .then(response=>response.json())
        .then(filmsDataL=>{
            const filmsI =`
            <table class="table table-striped-columns">
                <th>
                    <tr>
                        <td>Name</td>
                        <td>${filmsDataL.name}</td>
                    </tr>
                    <tr>
                        <td>Episode</td>
                        <td>${filmsDataL.episode}</td>
                    </tr>
                    <tr>
                        <td>Opening crawl</td>
                        <td>${filmsDataL.opening_crawl}</td>
                    </tr>
                    <tr>
                        <td>Director</td>
                        <td>${filmsDataL.director}</td>
                    </tr>
                    <tr>
                        <td>Producer</td>
                        <td>${filmsDataL.producer}</td>
                    </tr>
                    <tr>
                        <td>Release date</td>
                        <td>${filmsDataL.release_date}</td>
                    </tr>
                    <tr>
                        <td>Created</td>
                        <td>${filmsDataL.created}</td>
                    </tr>
                    <tr>
                        <td>Edited</td>
                        <td>${filmsDataL.edited}</td>
                    </tr>
                    <tr>
                        <td>url</td>
                        <td>${filmsDataL.url}</td>
                    </tr>
                </th>    
                `;
                document.getElementById('film').innerHTML=
                `<p>Film:</p> ${filmsI} 
            </table>
                `
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
    }
)}}
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