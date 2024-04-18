function funcionPrueba(){
    let a=7
    let b=9
    c=a*b/2
    return c
}
var objetos = {
    personas: "humano", 
    carro: "tesla",
    libro: "La cuarta cripta",
    numero: 66,
    funcion: funcionPrueba()
}

console.log(objetos)

objetos.carro = "Logan";
objetos.coche = "Audi"
objetos.libro = null
console.log(objetos)