var mesa =[
    "0","0","0","0","0","0","0","0",
    "0","0","0","0","0","0","0","0",
    "0","0","0","0","0","0","0","0",
    "0","0","0","0","0","0","0","0",
    "0","0","0","0","0","0","0","0",
    "0","0","0","0","0","0","0","0",
    "0","0","0","0","0","0","0","0",
    "0","0","0","0","0","0","0","0"
];
let ubicacion = parseInt(prompt("Cual es la ubicación de la primera reina (Desde 0 hasta 63)"));// ubicacion a buscar en "mesa"

if (ubicacion>=0 && ubicacion<=mesa.length){
    mesa[ubicacion]="R";
    console.log(mesa); //Todo bien hasta aquí
    var tabla=[]
    //-------------------------------------------------------------------------------DSN
    function posicion (tabla, fila, colum){
        for (let i =0; i<colum;i=i+1){
            if (tabla[i]===fila || Math.abs(tabla[i]-fila)===Math.abs(i-colum)){return false;}
        }
        return true;
    }
    function lasReina(){
        var tabla = [-1, -1, -1, -1, -1, -1, -1, -1];
        return lugar(0,tabla)
    }
    function lugar (colum, tabla){
        if (colum===8){ 
            return true;}

        for (var fila = 0; fila<8; fila=fila+1){
            if (posicion(tabla,fila,colum)){
                tabla[colum]=fila;
                if (lugar(colum + 1,tabla)){
                    return true;}
            }
        }return false;
    }
    if (lasReina()){
        for (var i=0;i<8;i=i+1){
            mesa[i*8+tabla[i]] = "R";
        }
    
        for (var i=0;i<8;i=i+1){
            let final ="";
            for (let j=0;j<8;j=j+1){
                final += mesa[i*8+j];
            }
            console.log(final.trim());
        }
    } else {console.log("No hay solución.");}
}
else{
    console.log("La ubicación puesta sobre pasa los limites.");//funciona
}