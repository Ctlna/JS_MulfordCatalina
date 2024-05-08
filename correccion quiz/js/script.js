window.onload=function lazar(){
    xhr= new XMLHttpRequest();
    let url=`https://randomuser.me/api/`;
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if (this.readyState===4 && this.status===200){
            let response = JSON.parse(this.responseText);
            console.log(response)
            foto(response);
            info(response);
            email(response);
            naci(response);
            ubi(response);
            celu(response);
            clave(response);
        }
        else if(this.readyState===4){
            console.log('Error: ',this.statusText);
        }
    };
    xhr.send();
}

function foto(elLink){
    let que = document.getElementById('foto');
    if (elLink.response==="error"){
        info.innerHTML=`<p>Error:${elLink.error}</p>`;
    }
    else{
        corto=elLink.results[0]            
        que.innerHTML=`
        <img src=${corto.picture.medium}>
        `};
}


function info(elLink){
    let name=document.getElementById('name')
    name.addEventListener('mouseover', function() {
        let que = document.getElementById('claro');
        let info=document.getElementById('oscuro');
        if (elLink.response==="error"){
            info.innerHTML=`<p>Error:${elLink.error}</p>`;
        }
        else{
            que.innerHTML=`Hi, My name is`
            corto=elLink.results[0]
            
            info.innerHTML=`
            <h1>${corto.name.first}  ${corto.name.last}</h1>
            `};
    });
}

function email(elLink){
    let mail=document.getElementById('email')
    mail.addEventListener('mouseover', function() {
        let que = document.getElementById('claro');
        let info=document.getElementById('oscuro');
        if (elLink.response==="error"){
            info.innerHTML=`<p>Error:${elLink.error}</p>`;
        }
        else{
            que.innerHTML=`My email address is`
            corto=elLink.results[0]
            info.innerHTML=`
            <h1>${corto.email}</h1>
            `
        }
    });
}

function naci(elLink){
    let birth=document.getElementById('birth')
    birth.addEventListener('mouseover', function() {        
        let que = document.getElementById('claro');
        let info=document.getElementById('oscuro');
        if (elLink.response==="error"){
            info.innerHTML=`<p>Error:${elLink.error}</p>`;
        }
        else{
            que.innerHTML=`My birthday is`
            corto=elLink.results[0]
            let bday= corto.dob.date.slice(0,10).replaceAll("-","/")
            info.innerHTML=`
            <h1>${bday}</h1>
            `
        }
    });
}

function ubi(elLink){
    let ubi=document.getElementById('ubi')
    ubi.addEventListener('mouseover', function() {
        let que = document.getElementById('claro');
        let info=document.getElementById('oscuro');
        if (elLink.response==="error"){
            info.innerHTML=`<p>Error:${elLink.error}</p>`;
        }
        else{
            que.innerHTML=`My address is`
            corto=elLink.results[0]
            
            info.innerHTML=`
            <h1>${corto.location.street.number}  ${corto.location.street.name} </h1>
            `
        };
    });
}

function celu(elLink){
    let phone=document.getElementById('phone')
    phone.addEventListener('mouseover', function() {
        let que = document.getElementById('claro');
        let info=document.getElementById('oscuro');
        if (elLink.response==="error"){
            info.innerHTML=`<p>Error:${elLink.error}</p>`;
        }
        else{
            que.innerHTML=`Hi, My phone number is`
            corto=elLink.results[0]
            
            info.innerHTML=`
            <h1>${corto.phone}</h1>
            `
        }
    });
}

function clave(elLink){
    let clave=document.getElementById('clave')
    clave.addEventListener('mouseover', function() {
        let que = document.getElementById('claro');
        let info=document.getElementById('oscuro');
        if (elLink.response==="error"){
            info.innerHTML=`<p>Error:${elLink.error}</p>`;
        }
        else{
            que.innerHTML=`Hi, My password is`
            corto=elLink.results[0]
            
            info.innerHTML=`
            <h1>${corto.login.password}</h1>
            `
        }
    });
}