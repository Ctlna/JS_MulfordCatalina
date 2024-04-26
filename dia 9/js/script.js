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
                <p>Film</p>
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
                    ` ${filmsI} 
                </table>
                    `
            });
    });
            `
            `
            dataL.vehicles.forEach(filmLink1 => {
                fetch(filmLink1)
                .then(response => response.json())
                .then(vehiclesDataL => {
                    const vehiclesI =`
                    <table class="table table-striped-columns table-info">
                        <th>
                            <tr>
                                <td class="text-success-emphasis">Name</td>
                                <td class="text-center">${vehiclesDataL.name}</td>
                            </tr>
                            <tr>
                                <td class="text-success-emphasis">Model</td>
                                <td class="text-center">${vehiclesDataL.model}</td>
                            </tr>
                            <tr>
                                <td class="text-success-emphasis">Manufacturer</td>
                                <td class="text-center">${vehiclesDataL.manufacturer}</td>
                            </tr>
                            <tr>
                                <td class="text-success-emphasis">Cost in Credits</td>
                                <td class="text-center">${vehiclesDataL.cost_in_credits}</td>
                            </tr>
                            <tr>
                                <td class="text-success-emphasis">Length</td>
                                <td class="text-center">${vehiclesDataL.length}</td>
                            </tr>
                            <tr>
                                <td class="text-success-emphasis">Max Atmosphering Speed</td>
                                <td class="text-center">${vehiclesDataL.max_atmosphering_speed}</td>
                            </tr>
                            <tr>
                                <td class="text-success-emphasis">crew</td>
                                <td class="text-center">${vehiclesDataL.crew}</td>
                            </tr>
                            <tr>
                                <td class="text-success-emphasis">passengers</td>
                                <td class="text-center">${vehiclesDataL.passengers}</td>
                            </tr>
                            <tr>
                                <td class="text-success-emphasis">Cargo Capacity</td>
                                <td class="text-center">${vehiclesDataL.cargo_capacity}</td>
                            </tr>
                            <tr>
                                <td class="text-success-emphasis">Consumables</td>
                                <td class="text-center">${vehiclesDataL.consumables}</td>
                            </tr>
                            <tr>
                                <td class="text-success-emphasis">Vehicle Class</td>
                                <td class="text-center">${vehiclesDataL.vehicle_class}</td>
                            </tr>
                            <tr>
                                <td class="text-success-emphasis">Created</td>
                                <td class="text-center">${vehiclesDataL.created}</td>
                            </tr>
                            <tr>
                                <td class="text-success-emphasis">Edited</td>
                                <td class="text-center">${vehiclesDataL.edited}</td>
                            </tr>
                            <tr>
                                <td class="text-success-emphasis">url</td>
                                <td class="text-center">${vehiclesDataL.url}</td>
                            </tr>
                        </th>    
                        `;
                        document.getElementById('vehicle').innerHTML+=
                        `<p>Vehicle:</p> ${vehiclesI} 
                    </table>
                        `
                });
        });
                `
        <p>Species:</p>
        <p><a href="${dataL.species}">${dataL.species}</a></p>
        <p></p>

        <p>:</p>
        <p></p>
        

        `
        dataL.starships.forEach(filmLink => {
            fetch(filmLink)
            .then(response => response.json())
            .then(starshipsDataL => {
                const starshipsI =`
                <p>Starships</p>
                <table class="table table-striped-columns table-info">
                <th>
                <tr>
                    <td class="text-success-emphasis">Name</td>
                    <td class="text-center">${starshipsDataL.name}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Model</td>
                    <td class="text-center">${starshipsDataL.model}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Manufacturer</td>
                    <td class="text-center">${starshipsDataL.manufacturer}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Cost in Credits</td>
                    <td class="text-center">${starshipsDataL.cost_in_credits}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Length</td>
                    <td class="text-center">${starshipsDataL.length}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Max Atmosphering Speed</td>
                    <td class="text-center">${starshipsDataL.max_atmosphering_speed}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">crew</td>
                    <td class="text-center">${starshipsDataL.crew}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">passengers</td>
                    <td class="text-center">${starshipsDataL.passengers}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Cargo Capacity</td>
                    <td class="text-center">${starshipsDataL.cargo_capacity}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Consumables</td>
                    <td class="text-center">${starshipsDataL.consumables}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Hyperdrive Rating</td>
                    <td class="text-center">${starshipsDataL.hyperdrive_rating}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">MGLT</td>
                    <td class="text-center">${starshipsDataL.MGLT}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Starship Class</td>
                    <td class="text-center">${starshipsDataL.starship_class}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Created</td>
                    <td class="text-center">${starshipsDataL.created}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">Edited</td>
                    <td class="text-center">${starshipsDataL.edited}</td>
                </tr>
                <tr>
                    <td class="text-success-emphasis">url</td>
                    <td class="text-center">${starshipsDataL.url}</td>
                </tr>
            </th>  
                    `;
                    document.getElementById('starships').innerHTML+=
                    ` ${starshipsI} 
                </table>
                    `
            });
    });
            
            `

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


`*/