var quien = prompt("Desea entra es trainer (T) o coordinaciòn (C):")

var rutas=[{
    "Ruta NodeJS": "Miguel",
    "Ruta Java": "Pedro",
    "Ruta NetCore": "Jholber"
}]
var PNode = [{
    "Pepo": "90",
    "Pepa": "50", 
    "Pipe": "30"
}];
var Java = [{
    "Nati": "80", 
    "Nina": "20", 
    "Nino":"70"
}];
var Netcore = [{
    "Luis": "100", 
    "Lali": "40",
    "Blue": "60"
}];

if (quien == "C" || "c"){

    var inscritos=[{
        "identificación": 2142, "Nombres":"pepo","Estado":"Inscrito"
    }]
    
    var que_hacer = prompt("Que desea hacer:\n 1. Procesar las inscripciones \n 2. Cambiar estado de ingreso \n 3. Agregar un estudiante a un grupo\n 4. Rutas")

    if (que_hacer==1){
        let nuevoInscito = prompt("Pon la siguiente informaciòn para inscribir un estudiante: \n - # de identificación. - Nombres. - Apellidos. - Dirección. - Acudiente. - Teléfonos de contacto(# de celular y #fijo). - Estado (En proceso de ingreso, Inscrito, Aprobado,Cursando, Graduado, Expulsado, Retirado). - Riesgo.");
        nuevoInscito = inscritos.push;

        console.log(inscritos);
    }

    else if (que_hacer==2){
        var nombre = prompt("Pon la identificacion del estudiante:")
        var notaInicial = prompt("Nota de examen de ingreso:")
        if (notaInicial>=60){
        for (var i = 0; i < inscritos.length; i++) {
                inscritos[i].Estado = "Aprobado"}
        console.log(inscritos);
        }
        else {
            console.log("No paso :(")
        }
    }

    else if (que_hacer==3){
        let donde = prompt("Donde lo vas a agregar: \n 1.La ruta NodeJS \n 2.La ruta Java \n 3. NetCore")
        if (donde==1){
            let nuevaLongitud = PNode.push(prompt("(Nombre del estudiante:nota promedio"));
            console.log(PNode)
        }
        else if (donde==2){
            let nuevaLongitud = Java.push(prompt("(Nombre del estudiante:nota promedio"));
            console.log(Java)
        }
        else if (donde==3){
            let nuevaLongitud = Netcore.push(prompt("(Nombre del estudiante:nota promedio"));
            console.log(Netcore)
        }
        else {console.log("No se encuentra esa ruta")}
    }
    else if (que_hacer==4){
        let editarRutas = prompt("Que deseas hacer:\n 1. Editar Rutas\n 2. Ver rutas")
        if (editarRutas==2){
            let cual = prompt("Que ruta deseas ver: \n 1.La ruta NodeJS \n 2.La ruta Java \n 3. NetCore")
            rutas.forEach((Element)=console.log(Element,indice))
        }

    }
}

else if (quien=="T"||"t"){

    var inscritos=[{
        "identificación": 2142, "Nombres":"pepo","Estado":"Inscrito"
    }]

    var quienVera = prompt("Deseas ver las notas de: \n 1.La ruta NodeJS \n 2.La ruta Java \n 3. NetCore")

    if (quienVera==1){
        console.log(PNode);
    }
    else if (quienVera==2){
        console.log(Java);
    }
    else if(quienVera==3){
        console.log(Netcore);
    }
    else {
        console.log("Haz puesto mal el nùmero")
    }
}
