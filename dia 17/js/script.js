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
    var que = document.getElementById('foto');
    if (elLink.response==="error"){
        info.innerHTML=`<p>Error:${elLink.error}</p>`;
    }
    else{
        corto=elLink.results[0]            
        que.innerHTML=`
        <img src=${corto.picture.medium}>
        `};
}


class textoName extends HTMLElement{
    constructor(){
        super();
        var elGris = this.attachShadow({mode:'open'});
        elGris.innerHTML=`<p>Hi, My name is</p>`
    }
}
function info(elLink){
    let name=document.getElementById('name')
    name.addEventListener('mouseover', function() {
        let info=document.getElementById('oscuro');
        if (elLink.response==="error"){
            info.innerHTML=`<p>Error:${elLink.error}</p>`;
        }
        else{
            customElements.define('espacio-claro',textoName);
            corto=elLink.results[0]
            info.innerHTML=`
            <h1>${corto.name.first}  ${corto.name.last}</h1>
            `};
    });
}


class textomail extends HTMLElement{
    constructor(){
        super();
        var elazul = this.attachShadow({mode:'open'});
        elazul.innerHTML=`<p>My email address is</p>`
    }
}
function email(elLink){
    let mail=document.getElementById('email')
    mail.addEventListener('mouseover', function() {
        let info=document.getElementById('oscuro');
        if (elLink.response==="error"){
            info.innerHTML=`<p>Error:${elLink.error}</p>`;
        }
        else{
            customElements.define('espacio-claro',textomail);
            corto=elLink.results[0]
            info.innerHTML=`
            <h1>${corto.email}</h1>
            `}
    });
}


class Nacitexto extends HTMLElement{
    constructor(){
        super();
        var elGris = this.attachShadow({mode:'open'});
            elGris.innerHTML=`<p>My birthday is</p>`
    }
}
function naci(elLink){
    let birth=document.getElementById('birth')
    birth.addEventListener('mouseover', function() {        
        let info=document.getElementById('oscuro');
        if (elLink.response==="error"){
            info.innerHTML=`<p>Error:${elLink.error}</p>`;
        }
        else{
            customElements.define('espacio-claro',Nacitexto);
            corto=elLink.results[0]
            let bday= corto.dob.date.slice(0,10).replaceAll("-","/")
            info.innerHTML=`
            <h1>${bday}</h1>
            `}
    });
}


class ubiTexto extends HTMLElement{
    constructor(){
        super();
        let elGris = this.attachShadow({mode:'open'});
            elGris.innerHTML=`<p>My address is</p>`
    }
}
function ubi(elLink){
    let ubi=document.getElementById('ubi')
    ubi.addEventListener('mouseover', function() {
        let info=document.getElementById('oscuro');
        if (elLink.response==="error"){
            info.innerHTML=`<p>Error:${elLink.error}</p>`;
        }
        else{
            customElements.define('espacio-claro',ubiTexto);
            corto=elLink.results[0]            
            info.innerHTML=`
            <h1>${corto.location.street.number}  ${corto.location.street.name} </h1>
            `};
    });
}


class celTexto extends HTMLElement{
    constructor(){
        super();
        let elGris = this.attachShadow({mode:'open'});
        elGris.innerHTML=`<p>Hi, My phone number is</p>`
    }
}
function celu(elLink){
    let phone=document.getElementById('phone')
    phone.addEventListener('mouseover', function() {
        let info=document.getElementById('oscuro');
        if (elLink.response==="error"){
            info.innerHTML=`<p>Error:${elLink.error}</p>`;
        }
        else{
            customElements.define('espacio-claro',celTexto);
            corto=elLink.results[0]
            
            info.innerHTML=`
            <h1>${corto.phone}</h1>
            `
        }
    });
}


class claveTexto extends HTMLElement{
    constructor(){
        super();
        let elGris = this.attachShadow({mode:'open'});
        elGris.innerHTML=`<p>My password is</p>`
    }
}
function clave(elLink){
    let clave=document.getElementById('clave')
    clave.addEventListener('mouseover', function() {
        let info=document.getElementById('oscuro');
        if (elLink.response==="error"){
            info.innerHTML=`<p>Error:${elLink.error}</p>`;
        }
        else{
            customElements.define('espacio-claro',claveTexto);
            corto=elLink.results[0]
            info.innerHTML=`
            <h1>${corto.login.password}</h1>
            `}
    });
}
