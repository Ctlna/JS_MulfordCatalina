//https://pokeapi.co/api/v2/pokemon/ditto
$("#elID").keypress(function(e) { 
    var code = (e.keyCode ? e.keyCode : e.which); 
    if(code == 13 && $(this).val()!=""){
        let pId=document.getElementById("elID").value;
        xhr = new XMLHttpRequest();
        let url = `https://pokeapi.co/api/v2/pokemon/${elID}`;
        xhr.open('GET',url,true);
        xhr.onreadystatechange=function(){
            if (this.readyState===4 && this.status===200){
                let response = JSON.parse(this.responseText);
                poke(response);
            }
            else if(this.readyState===4){
                console.log('Error: ',this.statusText);
            }
        };
        xhr.send();
        }
});
function poke(datos){}