// Practica y Ejercicios Dìa 1
//Catalina Mulford Monroy


let a = 1;
let b = 16;
let te = "Texto"
var quiero = "pasear"

console.log(quiero)
console.log (a+b)
console.log(typeof 9);
console.log(typeof te);

var quiero = "ya no";
console.log(quiero)


// Boleanos

let S = true
let N = false

console.log ("La variable S es: " ,S)
console.log ("La variable N es: " ,N)
console.log("AND: && ", S&&S)
console.log("OR: || ", S||N)
console.log("NOT: ! ", !N)


//Funciòn sin retorno sin parametros
function funcionNormal(){
    console.log("La funciòn");
}
console.log(funcionNormal());


//Funciòn sin retorno con parametros
function funcionNorma(a,b){
    console.log(a*b);
}
funcionNorma(a,b);

//Funciòn con retorno con parametros
function funcionNor(c,d){
    return c+d;
}
console.log(funcionNor(5,8));

//Funciòn con retorno sin parametros
function funcionNormalita(a,b){
    return "Devolvio";
}
console.log(funcionNormalita());


// Bucles

arreglo=[123,"dsf",true]
console.log(arreglo.length);

tamano=arreglo.length;

for (let i=0;i<tamano;i++){
    console.log(arreglo[i])
}

// -------------- Ejercicios --------------------------
