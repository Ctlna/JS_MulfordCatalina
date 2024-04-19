// Punto 1
var person = []
person.push({nombre:"Azucar", age:24, country:"Cuba"});
person.push({nombre:"Pepa", age:5, country:"Liberia"});
console.table(person);
// Punto 2
function ara(a,b){
    area=a*b
    return area
}
function peri(a,b){
    perimetro= a+a+b+b
    return perimetro
}
width = 2,
heigth= 5
var Rectangle={
    width : 2,
    heigth: 5,
    Area: ara(width,heigth),
    Perimetro: peri(width,heigth)
}
console.table(Rectangle)
// Punto 3
var Vehicle=[
    {   make:"In China",
        model:"Chery Tiggo 2",
        year: 2018,
        car: Car={puertas:4}
    }
]
console.table(Vehicle)
// Punto 4
var BankAccount =[{
    account: 154151,
    balance: 2000,
    deposito: "No supe"
/*    depositar: depositar()*/
}]
/*function depositar(){
    poner=3000;
    cambiar=BankAccount.balance+3000;
    BankAccount.balance(cambiar);
    return fc
}*/
console.table(BankAccount)
// Punto 5
function tri(){
    alt=53
    bas=41
    are=alt*bas/2
    return are
}
function cir(){
    radio=12
    are= Math.PI*radio^2
    return are
}
var Shape=[
    circle={area: cir()},
    triangle={area:tri()}
]
console.table(Shape)
// Punto 6


// Punto 7

