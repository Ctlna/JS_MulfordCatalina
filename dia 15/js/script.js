window.onload=function lazar(){
    xhr= new XMLHttpRequest();
    let url=`https://randomuser.me/api/`;
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if (this.readyState===4 && this.status===200){
            let response = JSON.parse(this.responseText);
            console.log(response)
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

function info(elLink){
    if (document.getElementById('name').onmousemove=true){
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
    }
}

function email(elLink){
    if (document.getElementById('email').onmousemove=true){ 
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
    }
}

function naci(elLink){
    if (document.getElementById('birth').onmousemove=true){
        let que = document.getElementById('claro');
        let info=document.getElementById('oscuro');
        if (elLink.response==="error"){
            info.innerHTML=`<p>Error:${elLink.error}</p>`;
        }
        else{
            que.innerHTML=`My birthday is`
            corto=elLink.results[0]
            
            info.innerHTML=`
            <h1>${corto.dob.date}</h1>
            `
        }
    }
}

function ubi(elLink){
    if (document.getElementById('ubi').onmousemove=true){
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
        }
    }
}

function celu(elLink){
    if (document.getElementById('phone').onmousemove=true){
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
    }
}

function clave(elLink){
    if (document.getElementById('clave').onmousemove=true){
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
    }
}